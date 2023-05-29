---
title: Git-VCS Commands
description: A list of the most important git-commands
date: '2023-5-27'
categories:
  - vcs
published: true
---

optional parameters: <span style="color: blue;">blue</span>  
most important commands: **!**

## CREATE REPOSITORY

**!** ``git init`` **=>** initialize as git repository  
**!** ``git clone <url>`` **=>** clones remote repo locally

## REPO INFO

**!** ``git status`` **=>** shows uncommitted changes in git repo  
``git log`` <span style="color: blue;">--reverse</span> || <span style="color: blue;">--all --graph --decorate</span> **=>** shows committed changes in git repo

## SIMPLE VERSION CONTROL

**!** ``git add <filePath (*.<fileExtension)>`` || <span style="color: blue;">--all (shortcut: -A, adds all files in dir, in subdir & supdir (* or . only adds current dir and subdir))</span> **=>** adds to stage  
**!** ``git commit -m "<changes>"`` <span style="color: blue;">--amend (add to last commit)</span> **=>** save staged changes as commit  
**!** ``git push`` **=>** add to binded remote repo

**!** ``git reset`` <span style="color: blue;">HEAD &lsaquo;file&rsaquo;</span> **=>** remove from stage  
``git reset --hard (deletes commit and following commits) || --soft (only deletes specified commit) <hash>`` **=>** delete commit

`git tag -a <Tag-Name> <Commit-ID>` **=>** add tag to commit
`git push origin --tags` **=>** push tags to remote

``git stash save || push`` <span style="color: blue;">&lsaquo;message&rsaquo;</span> **=>** save uncommitted changes in working directory  
``git stash show <stash>`` **=>** show changes in workdir of specific stash  
``git stash apply <stash>`` **=>** apply stash to current workdir  
``git stash drop || pop (also applies stash to workdir) <stash>`` **=>** delete stash  
``git stash list`` **=>** list all stashes  
``git stash clear`` **=>** remove all stashes

## BRANCHES

**!** ``git branch`` **=>** show all branches  
**!** ``git branch <branchName>`` **=>** create new branch  
**!** ``git checkout <branch> || <hash>`` **=>** move to branch or commit  
**!** ``git merge <branchToMergeFrom>`` **=>** merges changes from branch to current branch

## REMOTE REPO ACTIONS

**!** ``git push`` <span style="color: blue;">&lsaquo;remote&rsaquo; &lsaquo;nameOfBranch&rsaquo;</span> **=>** save commits from local repo in remote  
**!** ``git pull`` <span style="color: blue;">&lsaquo;remote&rsaquo; &lsaquo;nameOfBranch&rsaquo;</span> **=>** save commits from remote to local repo (with merges if necessary)  
``git fetch`` **=>** save commits from remote to local repo (without merging anything)
