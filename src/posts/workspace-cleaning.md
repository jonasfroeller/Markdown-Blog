---
title: Clean your Workspace!
description: This post is about deleting generateables, temporary files and sensitive data before uploading your files to cloud services, to just get rid of the data because it is not needed or to keep data private if you want to share projects with somebody.
date: '2023-5-14'
categories:
  - software
  - coding
published: true
---

## node_modules

If you have ever worked with **NodeJS** before you know well how annoying the `node_modules` folders can get over time.  
If you download dependencies for a **NodeJS** project the files of these modules are stored in a `node_modules` folder. If you stop working on a project, you often forget to delete the folder. You should do that, because it can be generated from your `package.json` file and takes up a lot of space on your file system if you work on larger projects.

### don't push generateables to github

To prevent git from adding your `node_modules` folder to the staging area you should add a `.gitignore` to your projects root folder. Create one at [toptal.com](https://www.toptal.com/developers/gitignore).  
To create one in every working dir you need one a vsc-snipped could be useful, so that you don't have to copy it every time from another project. You can download some snippets i created here: [vsc-code-snippets.vercel.app](https://vsc-code-snippets.vercel.app/).

**Example .gitignore:**

```text
## Windows ###
# src: https://www.toptal.com/developers/gitignore/api/windows

# Windows thumbnail cache files
**/Thumbs.db
**/Thumbs.db:encryptable
**/ehthumbs.db
**/ehthumbs_vista.db

# Dump file
**/*.stackdump

# Folder config file
**/[Dd]esktop.ini

# Recycle Bin used on file shares
**/$RECYCLE.BIN/

# Windows Installer files
**/*.cab
**/*.msi
**/*.msix
**/*.msm
**/*.msp

# Windows shortcuts
**/*.lnk

### Linux ###
# src: https://www.toptal.com/developers/gitignore/api/linux
**/*~

# temporary files which can be created if a process still has a handle open of a deleted file
**/*.fuse_hidden*

# KDE directory preferences
**/*.directory

# Linux trash folder which might appear on any partition or disk
**/*.Trash-*

# .nfs files are created when an open file is removed but is still being accessed
**/*.nfs*

### Dev ###
**/*.idea
**/*.vscode
**/*.code-workspace
**/*.vercel
**/*node_modules
**/*vendor

# Env
**/*.env*
**/*.pem

# Framework Builds
**/build
```

### deleting files on your system

If you just want to delete some files and folders in your project before sending it to somebody use a script to do it for you.

**Example for Windows:**

```shell
#!/bin/bash

folder="root (.)"

echo deleting .pem and .env files
del /s /q ".\*.pem"
del /s /q ".\.env"

folder="frontend"
echo folder=$folder

echo deleting .vercel
rm -rf "$folder/.vercel"

echo deleting .svelte-kit
rm -rf "$folder/.svelte-kit"

echo deleting node_modules
rm -rf "$folder/node_modules"

folder="backend"
echo folder=$folder

echo deleting vendor
rm -rf "$folder/vendor"

read -p "Press Enter to exit..."
```

**Example for Linux:**

```batch
@echo off

set "folder=."

echo deleting .pem and .env files in root (%folder%)
del /s /q "%folder%\*.pem"
del /s /q "%folder%\.env"

set folder=frontend
echo folder=%folder%

echo deleting .vercel
rd /s /q "%folder%\.vercel"

echo deleting .svelte-kit
rd /s /q "%folder%\.svelte-kit"

echo deleting node_modules
rd /s /q "%folder%\node_modules"

set folder=backend
echo folder=%folder%

echo deleting vendor
rd /s /q "%folder%\vendor"

pause
```

If you forgot to delete a lot of `node_modules` folders on your system you could use `npx npkill` to view them all and delete them or write a script to do it.  

**Example for Windows:**

```batch
@echo off

setlocal EnableDelayedExpansion

for /r %%d in (node_modules) do (
    rd /s /q "%%d"
    echo deleted "%%d"
)

pause
```

**Example for Linux:**

```shell
#!/bin/bash
find . -name "node_modules" \
-type d -prune -exec rm -rf '{}' \;

read -p "Press Enter to exit..."
```

### deleting temporary files on your system

```batch
@echo off

REM setting temp path
set tmp_dir=%localappdata%\Temp

REM changing to temp dir
cd /d %tmp_dir%

REM deleting temporary files and directories
del /q /f /s *
for /d %%x in (*) do rmdir /s /q "%%x"

pause
```

**Example for Linux:**

```shell
#!/bin/bash

# changing to temp dir
cd /tmp

# deleting temporary files and directories
rm -rf *

read -p "Press Enter to exit..."
```
