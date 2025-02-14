import os
import sys
import subprocess

import qrbill
from qrbill import QRBill
def get_files(file_path):
    print(file_path)
    check = subprocess.check_output(["python","--version"], text=True)
    check_path = os.path.exists(file_path)
    print(os.path.abspath("myenv"))  

    print(check_path)
    print(check)

if __name__ == "__main__":
    get_files("src/main.py")
    get_files("my_code_validator/cli.py")
    get_files("my_code_validator/commands/validate_project.py")
