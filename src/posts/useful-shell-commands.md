---
title: Useful Shell Commands
description: Some useful shell programs/commands and infos.
date: '2023-9-30'
categories:
  - software
  - coding
published: true
---

## General

| Command                   | Description                                                                                                                              | Example                                                    |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| General                   |                                                                                                                                          |                                                            |
| `clear`                   | clears the terminal                                                                                                                      | `clear`                                                    |
| `echo`                    | outputs the value of the variable or string                                                                                              | `echo "Hi" >> test.txt`                                    |
| `cd`                      | enter a directory                                                                                                                        | `cd ..`                                                    |
| `reboot`                  | reboot the system                                                                                                                        | `reboot`                                                   |
| `exit`                    | exit the current user or the terminal                                                                                                    | `exit`                                                     |
| `shutdown`                | shutdowns the system                                                                                                                     | `shutdown -P`                                              |
| Info                      |                                                                                                                                          |                                                            |
| `whoami`                  | print the current user                                                                                                                   | `whoami`                                                   |
| `man`                     | show the manual of the command (--help)                                                                                                  | `man ls`                                                   |
| `apropos`                 | search for the word in the description of all commands                                                                                   | `apropos list`                                             |
| `hostname`                | display or set a computer's hostname                                                                                                     | `hostname`                                                 |
| `uname`                   | show all the information of the OS                                                                                                       | `uname -a`                                                 |
| `nproc`                   | print the number of processing units available                                                                                           | `nproc`                                                    |
| `uptime`                  | show how long system has been running, number of logged-on users, and system load averages                                               | `uptime`                                                   |
| `w` or `who`              | Show who is logged on and what they are doing                                                                                            | `w`                                                        |
| `whereis`                 | locate the binary, source, and manual page files for a command                                                                           | `whereis command`                                          |
| `which`                   | locate a command                                                                                                                         | `which command`                                            |
| `ifconfig` or `iwconfig`  | lists all the network interfaces on your machine                                                                                         | `ifconfig`                                                 |
| `netstat`                 | print network connections, routing tables, interface statistics...                                                                       | `netstat -an`                                              |
| `lscpu`                   | list CPU architecture information                                                                                                        | `lscpu`                                                    |
| `lsusb`                   | list information about USBs                                                                                                              | `lsusb`                                                    |
| `lsblk`                   | list block devices                                                                                                                       | `lsblk`                                                    |
| `lspci`                   | list PCI devices                                                                                                                         | `lspci`                                                    |
| `lshw`                    | hardware info                                                                                                                            | `lshw`                                                     |
| `free`                    | show memory and swap usage                                                                                                               | `free`                                                     |
| `du`                      | show directory space usage                                                                                                               | `du`                                                       |
| `df`                      | show disk usage                                                                                                                          | `df -h`                                                    |
| `lsmod`                   | loaded kernel modules                                                                                                                    | `lsmod`                                                    |
| Files & Directories       |                                                                                                                                          |                                                            |
| `mkdir`                   | makes a folder with the specified name                                                                                                   | `mkdir Songs`                                              |
| `rmdir`                   | removes the specified folder                                                                                                             | `rmdir Songs`                                              |
| `touch`                   | create file or update timestamp of existing                                                                                              | `touch test.txt`                                           |
| `nano`                    | edit file in nano editor                                                                                                                 | `nano cmds.txt`                                            |
| `tail`                    | reads the last 10 lines of the file                                                                                                      | `tail cmds.txt`                                            |
| `head`                    | reads the first 10 lines of the file                                                                                                     | `head cmds.txt`                                            |
| `cat`                     | reads the specified file                                                                                                                 | `cat cmds.txt`                                             |
| `tac`                     | reads the specified file in reverse                                                                                                      | `tac cmds.txt`                                             |
| `find`                    | search for files in a directory hierarchy                                                                                                | `find /path/to/search -name "*.txt"`                       |
| `diff`                    | compare files line by line                                                                                                               | `diff file1.txt file2.txt`                                 |
| `grep`                    | print lines matching a pattern                                                                                                           | `grep "pattern" file.txt`                                  |
| `less`                    | read file with pagination                                                                                                                | `less file.txt`                                            |
| `cp`                      | copy file or folder                                                                                                                      | `cp music.mp3`                                             |
| `mv`                      | rename or move a file or folder                                                                                                          | `mv exe txt`                                               |
| `rm`                      | remove files or directories                                                                                                              | `rm -rf folderWithFilesInside`                             |
| `ln`                      | create links                                                                                                                             | `ln -s target link`                                        |
| `lsof`                    | list opened files                                                                                                                        | `lsof`                                                     |
| `sed`                     | stream editor for filtering and transforming text                                                                                        | `sed 's/old/new/g' file.txt`                               |
| `locate`                  | find files by name                                                                                                                       | `locate filename`                                          |
| `wc`                      | print newline, word, and byte counts for each file                                                                                       | `wc -l -w -c file.txt`                                     |
| `ls`                      | list all items in the current folder (-I formats)                                                                                        | `ls -lah`                                                  |
| `tree`                    | lists the files in the current directory                                                                                                 | `tree`                                                     |
| `pwd`                     | print the name of the current directory                                                                                                  | `pwd`                                                      |
| Compression/Decompression |                                                                                                                                          |                                                            |
| `tar`                     | manipulate archives files (c - create archive, t - table of contents, x - extract, f - use zip/gzip, j - bzip2 compression, v - verbose) | `tar -czvf archive.tar.gz /path/to/source`                 |
| `zip`                     | compresses the specified files                                                                                                           | `zip files`                                                |
| `unzipzip`                | decompress the specified files                                                                                                           | `unzip files`                                              |
| `bzip2`                   | compress and decompress files with the extension "bz2"                                                                                   | `bzip2 -z cmds`                                            |
| `gzip`                    | same as bzip2 but compresses files with a gz extension                                                                                   | `gzip file`                                                |
| Users                     |                                                                                                                                          |                                                            |
| `users`                   | shows names of users logged in                                                                                                           | `users`                                                    |
| `adduser` or `useradd`    | adds another user                                                                                                                        | `adduser david`                                            |
| `deluser`                 | deletes a user                                                                                                                           | `deluser david`                                            |
| `passwd`                  | change user password                                                                                                                     | `passwd [user]`                                            |
| `usermod`                 | modify user settings and preferences                                                                                                     | `usermod david --shell /bin/bash`                          |
| `su`                      | impersonate as the specified user                                                                                                        | `su root`                                                  |
| `id`                      | print user and group information                                                                                                         | `id`                                                       |
| Priviliges/Permission     |                                                                                                                                          |                                                            |
| `chmod`                   | change file mode                                                                                                                         | `chmod +x script.sh`                                       |
| `chown`                   | change file owner and group                                                                                                              | `chown user:group file.txt`                                |
| Networking                |                                                                                                                                          |                                                            |
| `ping`                    | ping host                                                                                                                                | `ping host`                                                |
| `whois`                   | get whois for domain                                                                                                                     | `whois domain`                                             |
| `dig`                     | get DNS for domain                                                                                                                       | `dig domain`                                               |
| `dig-x`                   | reserve lookup host                                                                                                                      | `dig-x host`                                               |
| Download/Installation     |                                                                                                                                          |                                                            |
| `curl`                    | download a URL                                                                                                                           | `curl -o https://example.com/file.txt`                     |
| `wget`                    | download file                                                                                                                            | `wget -c file` or `wget -r url`                            |
| `dpkg`                    | install .deb                                                                                                                             | `dpkg -i file.deb`                                         |
| `alien`                   | install .rpm                                                                                                                             | `alien -i file.rpm`                                        |
| Remote Connection         |                                                                                                                                          |                                                            |
| `rsync`                   | remote file copy                                                                                                                         | `rsync -avz source/ user@destination:/path/to/destination` |
| `scp`                     | secure copy (remote file copy program)                                                                                                   | `scp file.txt user@remote:/path/to/destination`            |
| `ssh`                     | OpenSSH SSH client (remote login program)                                                                                                | `ssh -p port user@hostname`                                |
| Processes                 |                                                                                                                                          |                                                            |
| `pkill`                   | kill process based on name and other attributes                                                                                          | `pkill -f process_name`                                    |
| `kill`                    | kill process with process id (pid)                                                                                                       | `kill -9 PID`                                              |
| `killall`                 | kill processes                                                                                                                           | `killall`                                                  |
| `ps`                      | display currently active processes                                                                                                       | `ps aux`                                                   |
| `systemctl`               | manage all the background running services (daemons)                                                                                     | `sudo systemctl disable ssh`                               |
| `journalctl`              | see all the logs for systemctl                                                                                                           | `journalctl -xe`                                           |
| `pgrep`                   | look up processes based on name and other attributes                                                                                     | `pgrep -u username process_name`                           |
| `top` or `htop`           | displays currently-running processes                                                                                                     | `top`                                                      |
| Variables                 |                                                                                                                                          |                                                            |
| `~` or  `$HOME`           | Home                                                                                                                                     | `ls $HOME`                                                 |
| `$USER`                   | current user's name                                                                                                                      | `echo $USER`                                               |
| `$PATH`                   | search paths for binaries                                                                                                                | `echo $PATH`                                               |
| `$PWD`                    | current working directory                                                                                                                | `echo $PWD`                                                |
| Other                     |                                                                                                                                          |                                                            |
| `visudo`                  | recommended way to edit `/etc/sudoers` file                                                                                              | `sudo visudo`                                              |
| `vipw`                    | recommended way to edit `/etc/passwd` file                                                                                               | `sudo vipw`                                                |


| Useful Directories        | Description                                                                                                                              |                                                            |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|
| `/etc/passwd`             | stores information of all the users                                                                                                      | `cat /etc/passwd`                                          |
| `/etc/shadow`             | stores the hashed version of every user's password                                                                                       | `cat /etc/shadow`                                          |
| `/proc/cpuinfo`           | display cpu info                                                                                                                         | `cat /proc/cpuinfo`                                        |
| `/proc/meminfo`           | memory info                                                                                                                              | `cat /proc/meminfo`                                        |
| `/dev/sda`                | partitionen                                                                                                                              | `parted /dev/sda print`                                    |

## Keyboard Commands

| Result                            | Shortcut                         |
|-----------------------------------|----------------------------------|
| Autocomplete                      | [Tab]                            |
| Cancel command                    | [Ctrl]+[C]                       |
| Pause command                     | [Ctrl]+[Z] (Resume with fg)      |
| Pause / resume output             | [Ctrl]+[S] / [Ctrl]+[Q]          |
| Clear screen                      | [Ctrl]+[L] or clear              |
| Delete text before / after cursor | [Ctrl]+[U] / [Ctrl]+[K]          |
| Delete word before cursor         | [Ctrl]+[W]                       |
| Go to beginning / end of line     | [Ctrl]+[A] / [Ctrl]+[E]          |
| Search command history            | [Ctrl]+[R] (Cancel: [Ctrl]+[G])  |
| Previous / next command           | [Ctrl]+[P] / [Ctrl]+[N]          |
| Emergency restart computer        | [Alt]+[Print]+[R][E][I][S][U][B] |
| Restart X server                  | [Alt]+[Print]+[K]                |

## Shell Operators

* `2>` && `2>>`       # redirect standard error (singular operator overwrites, dual appends)
* `&>` && `&>>`       # redirect both standard output and standard error
* `|&`                # pipe both standard output and standard error to another command
* `<()`               # command substitution, replaces the output of a command as an argument
* `&&`                # execute the command following only if the preceding command succeeds
* ``|``               # redirect standard output to another command (pipe)
* `||`                # execute the command following only if the preceding command fails
* `;`                 # command separator, allows multiple commands on a single line
* `>`                 # redirection of standard output
* `>>`                # append to a file (redirect standard output and append)
* `<`                 # redirection of standard input
* `<<`                # here document, used for inline input to a command
* `&`                 # send a command to the background
* `!`                 # negate a command, or run a command in the background

## Permissions

| Permission | Octal | Meaning                               | Example     |
|------------|-------|---------------------------------------|-------------|
| `---`      | `0`   | no permissions                        | `chmod 000` |
| `--x`      | `1`   | execute (or "search" for directories) | `chmod 111` |
| `-w-`      | `2`   | write                                 | `chmod 222` |
| `-wx`      | `3`   | write and execute                     | `chmod 333` |
| `r--`      | `4`   | read                                  | `chmod 444` |
| `r-x`      | `5`   | read and execute                      | `chmod 555` |
| `rw-`      | `6`   | read and write                        | `chmod 666` |
| `rwx`      | `7`   | read, write, and execute              | `chmod 777` |

**Scope:**
- **u** stands for the owner (user).
- **g** stands for the group.
- **o** stands for others.
- **a** stands for all.

## Installation

| Command                        | Description                                      |
|--------------------------------|--------------------------------------------------|
| `apt-get update`               | Update package list of available packages        |
| `apt-get upgrade`              | Upgrade installed packages                       |
| `apt-get dist-upgrade`         | Upgrade with dependencies resolution             |
| `apt-get install -f`           | Fix dependencies                                 |
| `apt-get install somePackage`  | Install a specific package                       |
| `apt-get remove somePackage`   | Uninstall a package                              |
| `apt-get purge somePackage`    | Uninstall a package along with its system config |
| `apt-cache search somePackage` | Search for a package in the repository           |
