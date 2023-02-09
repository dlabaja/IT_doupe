import random

deck = []
table = ""
players = []
plus_card_buffer = []
stopped = False
direction = 1
current_player = -1

class color:
    black = "\u001b[30m"
    red = "\u001b[31m"
    green = "\u001b[32m"
    yellow = "\u001b[33m"
    blue = "\u001b[34m"
    gray = "\u001b[38;2;87;85;85m"
    bold = "\u001b[1m"
    none = "\u001b[0m"

def clear_screen():
    import os
    if os.name == "nt":
        os.system("cls")
        return
    os.system("clear")

def game():
    global deck
    deck = generate_deck()

    global players
    for i in range(2): # verify_input("Zadejte počet hráčů: ")
        players.append([])
        take_from_deck(7, players[i])

    global table
    table = deck[-1]
    i = 1
    while color.black in table:
        i += 1
        table = deck[-i]

    while True:
        for i in range(len(players)):
            global current_player
            current_player = (current_player + direction) % len(players)

            print(f"Na tahu je {color.bold}Hráč #{current_player + 1}{color.none}")
            play(players[current_player])

            if len(players[current_player]) == 0:
                clear_screen()
                print(f"Vyhrál Hráč #{current_player + 1}")
                return

            clear_screen()

def play(karty):
    karta = choose_card(karty)

    # hrac dobira
    if karta is None:
        return

    # hrac zastaven STOP kartou
    if karta == "STOP":
        input("Byl jste zastaven, jedno kolo nejedete ")
        return

    input(f"Zahráli jste {karta} ")
    karta = special_card_check(karta)
    put_on_table(karta, karty)
    return karta

def generate_playable_cards(karty):
    playable = {0: 0}
    for i in range(len(karty)):
        if is_playable(karty[i]):
            playable.update({i + 1: karty[i]})
    return playable

def generate_ui(karty, playable):
    s = f"{color.bold}0)BRÁT{color.none} "
    for i in range(len(karty)):
        if karty[i] in playable.values():
            s += f"{color.bold}{i + 1}){karty[i]}{color.none}  "
        else:
            s += f"{color.gray}{i + 1}){karty[i]}{color.none}  "

    print(f"""Stůl: {table}
Karty: {s}""")

def choose_card(karty):
    playable = generate_playable_cards(karty)
    generate_ui(karty, playable)

    if len(playable) == 1:  # není co hrát, ber karty
        if len(plus_card_buffer) != 0:  # dostal +4/+2
            take_plus_cards(karty)
            return

        global stopped  # hráč zastaven
        if stopped:
            stopped = False
            return "STOP"

        # hráč nemá žádné hratelné karty
        input("Nemůžete zahrát žádnou kartu, stiskněte tlačítko pro braní: ")
        input(f"Vybral jste {take_from_deck(1, karty)[0]}")
        return

    else:  # hráč má co hrát
        vstup = verify_input("Zadejte číslo karty: ")
        while vstup not in playable.keys():
            vstup = verify_input("Tuto kartu zahrát nemůžete. Zkuste to znovu: ")

    if vstup == 0:  # hráč chce dobírat
        input(f"Vybral jste {take_from_deck(1, karty)[0]} ")
        return

    return karty[vstup - 1]

def special_card_check(karta):
    # hrac pouzil STOP kartu
    if "∅" in karta:
        global stopped
        stopped = True

    # zmena smeru
    if "⇔" in karta:
        global direction
        direction = -direction

    # zmena barvy
    if "BARVA" in karta:
        karta = change_color("BARVA")
    elif "+4" in karta:
        karta = change_color("+4")

    # dalsi bere +4/+2 pokud to neprebije
    if "+4" in karta or "+2" in karta:
        global plus_card_buffer
        plus_card_buffer.append(karta)
    return karta

def put_on_table(karta, lst):
    if karta is None:
        return
    global table
    table = karta
    lst.remove(find_match(lst, karta, ["BARVA", "+4"]))

def take_plus_cards(karty):
    global plus_card_buffer
    count = 0
    for i in plus_card_buffer:
        count += int(get_symbol(i)[1])
    plus_card_buffer = []
    input(f"Musíte brát {count} karet, stiskněte tlačítko pro braní: ")
    print("Vybral jste ", end="")
    print(take_from_deck(count, karty))
    return

def find_match(lst, match, keywords):
    for item in lst:
        if item == match:
            return item
    for item in lst:
        if any(keyword in item for keyword in keywords):
            return item

def get_symbol(karta):
    return karta[5:]

def get_color(karta):
    return karta[:5]

def verify_input(msg):
    while True:
        try:
            return int(input(msg))
        except:
            continue

def change_color(jmeno_karty):
    vstup = verify_input(f"""Zadejte barvu, na kterou chcete změnit
{color.red}1 {color.blue}2 {color.green}3 {color.yellow}4{color.none}: """)

    volba = {1: color.red, 2: color.blue, 3: color.green, 4: color.yellow}

    while vstup not in volba.keys():
        vstup = verify_input("Tato barva neexistuje. Zkuste to znovu: ")

    return f"{volba[vstup]}{jmeno_karty}{color.none}"

def is_playable(karta):
    barva_karta = get_color(karta)
    symbol_karta = get_symbol(karta)
    barva_stul = get_color(table)
    symbol_stul = get_symbol(table)
    if len(plus_card_buffer) > 0 and ("+4" not in karta and "+2" not in karta):
        return False
    if stopped and "∅" not in karta:
        return False

    if barva_karta == barva_stul or symbol_karta == symbol_stul or barva_karta == color.black:
        return True

    return False

def take_from_deck(count, karty):
    global deck
    ls = deck[:count]
    deck = deck[count:]
    karty += ls
    return ls

# 108 karet, viz https://www.unorules.org/how-many-cards-in-uno/
def generate_deck():
    deck = []
    cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "∅", "⇔", "+2"]
    colors = [color.red, color.blue, color.green, color.yellow]
    for i in range(len(colors)):
        for j in range(len(cards)):
            deck.append(f"{colors[i]}{cards[j]}{color.none}")
            if cards[j] != 0:
                deck.append(f"{colors[i]}{cards[j]}{color.none}")

    for i in range(4):
        deck.append(f"{color.black}BARVA{color.none}")
        deck.append(f"{color.black}+4{color.none}")
    random.shuffle(deck)
    return deck

game()
