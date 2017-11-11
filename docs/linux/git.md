# linux git

1. how to install git

- `apt-get update` you need update your local packages first.

- `apt-get install git` install git.

- `git --version` you can use this command view git version.

2. config your git

- `git config --global user.name "your name"` config your git user name.

- `git config --global user.email "example@..."` config your git email.

- after config your git name && email, you will be find a new file the file name is `.gitconfig`.

3. get SSH keys

- `ssh-keygen -t rsa -C "example@..."` use this command to generate your public key, it saved in /root/.ssh/id_rsa.pub.

- `cat ~/.ssh/id_rsa.pub` open your public key file.

4. setting SSH keys

- copy the file, it's the SSH key in this computer.

- open your browser with your github, settings -> SSH and GPG keys -> new SSH key -> set title && copy your public key in key input.