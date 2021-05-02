import random


def decide_winner():
    if user_move == my_move:
        print("It's a tie!")
    elif user_move == "P" and my_move == "R":
        print("Paper beats Rock. You win!")
    elif user_move == "R" and my_move == "S":
        print("Rock beats scissor. You win!")
    elif user_move == "S" and my_move == "P":
        print("Scissor beats Paper. You win!")
    else:
        print("I win!!")


print("Let's play some Paper, Rock, Scissors! Type 'P', 'R' or 'S' to begin.")
while True:
    print("1,2,3 Shoot!")
    choices = ["R", "P", "S"]
    user_move = input()
    if user_move in choices:
        msg = f"You have choosen {user_move}"
        print(msg)
        my_move = choices[random.randint(0, 2)]
        msg2 = f"I have choosen {my_move}"
        print(msg2)
        decide_winner()
    else:
        print("Please enter P or R or S")
