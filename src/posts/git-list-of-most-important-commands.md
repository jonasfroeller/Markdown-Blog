---
title: Git-VCS Commands
description: A list of the most important git-commands
date: '2023-5-27'
categories:
  - vcs
published: true
---

optional parameters: <span style="color: blue;">blue</span>  
most important commands: <span style="color: green;"><span style="color: green;">!</span></span>

## CREATE REPOSITORY

<span style="color: green;">!</span> ``git init`` **=>** initialize as git repository  
<span style="color: green;">!</span> ``git clone <url>`` **=>** clones remote repo locally

## REPO INFO

<span style="color: green;">!</span> ``git status`` **=>** shows uncommitted changes in git repo  
``git log`` <span style="color: blue;">--reverse</span> || <span style="color: blue;">--all --graph --decorate</span> **=>** shows committed changes in git repo

## SIMPLE VERSION CONTROL

<span style="color: green;">!</span> ``git add <filePath (*.<fileExtension)>`` || <span style="color: blue;">--all (shortcut: -A, adds all files in dir, in subdir & supdir (* or . only adds current dir and subdir))</span> **=>** adds to stage  
<span style="color: green;">!</span> ``git commit -m "<changes>"`` <span style="color: blue;">--amend (add to last commit)</span> **=>** save staged changes as commit  
<span style="color: green;">!</span> ``git push`` **=>** add to binded remote repo

<span style="color: green;">!</span> ``git reset`` <span style="color: blue;">HEAD &lsaquo;file&rsaquo;</span> **=>** remove from stage  
``git reset --hard (deletes commit and following commits) || --soft (only deletes specified commit) <hash>`` **=>** delete commit

``git stash save || push`` <span style="color: blue;">&lsaquo;message&rsaquo;</span> **=>** save uncommitted changes in working directory  
``git stash show <stash>`` **=>** show changes in workdir of specific stash  
``git stash apply <stash>`` **=>** apply stash to current workdir  
``git stash drop || pop (also applies stash to workdir) <stash>`` **=>** delete stash  
``git stash list`` **=>** list all stashes  
``git stash clear`` **=>** remove all stashes

## BRANCHES

<span style="color: green;">!</span> ``git branch`` **=>** show all branches  
<span style="color: green;">!</span> ``git branch <branchName>`` **=>** create new branch  
<span style="color: green;">!</span> ``git checkout <branch> || <hash>`` **=>** move to branch or commit  
<span style="color: green;">!</span> ``git merge <branchToMergeFrom>`` **=>** merges changes from branch to current branch

## REMOTE REPO ACTIONS

<span style="color: green;">!</span> ``git push`` <span style="color: blue;">&lsaquo;remote&rsaquo; &lsaquo;nameOfBranch&rsaquo;</span> **=>** save commits from local repo in remote  
<span style="color: green;">!</span> ``git pull`` <span style="color: blue;">&lsaquo;remote&rsaquo; &lsaquo;nameOfBranch&rsaquo;</span> **=>** save commits from remote to local repo (with merges if necessary)  
``git fetch`` **=>** save commits from remote to local repo (without merging anything)
