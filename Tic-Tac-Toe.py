def print_board(board):
    print("  0   1   2")
    for idx, row in enumerate(board):
        print(f"{idx} " + " | ".join(row))
        if idx < 2:
            print("  " + "-" * 9)

def check_winner(board, player):
    for i in range(3):
        if all([cell == player for cell in board[i]]):
            return True
        if all([board[j][i] == player for j in range(3)]):
            return True
    if all([board[i][i] == player for i in range(3)]):
        return True
    if all([board[i][2 - i] == player for i in range(3)]):
        return True
    return False

def is_full(board):
    return all([cell != " " for row in board for cell in row])

def tic_tac_toe():
    board = [[" " for _ in range(3)] for _ in range(3)]
    current_player = "X"
    print("Welcome to Tic-Tac-Toe!")
    print("Enter your move as 'row col' (e.g., 1 2). Type 'q' to quit.")
    while True:
        print_board(board)
        move = input(f"Player {current_player}, enter row and column: ")
        if move.lower() == 'q':
            print("Game exited.")
            break
        try:
            row, col = map(int, move.strip().split())
            if not (0 <= row < 3 and 0 <= col < 3):
                print("Row and column must be between 0 and 2.")
                continue
            if board[row][col] != " ":
                print("Cell already taken. Try again.")
                continue
            board[row][col] = current_player
        except (ValueError, IndexError):
            print("Invalid input. Try again.")
            continue
        if check_winner(board, current_player):
            print_board(board)
            print(f"Player {current_player} wins!")
            break
        if is_full(board):
            print_board(board)
            print("It's a tie!")
            break
        current_player = "O" if current_player == "X" else "X"

if __name__ == "__main__":
    tic_tac_toe()