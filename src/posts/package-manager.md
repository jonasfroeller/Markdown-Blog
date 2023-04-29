---
title: JS Package-Managers
description: NPM, PNPM and more
date: '2023-4-29'
categories:
  - software
published: true
---

## NPM

### Installisation [NPM](https://github.com/nvm-sh/nvm)

**Debian-based Linux distribution**: `sudo apt-get install npm`  
**macOS**: `brew install npm`  
**Windows (with PowerShell)**: `winget install NodeJS.NodeJS`  

**Winget (if not installed on Windows)**: `dism /Online /Add-Capability /CapabilityName:Microsoft.Windows.AppDev.WindowsPackageManagerv1~~~~0.0.1.0`

## PNPM

### Installisation [PNPM](https://pnpm.io/installation)

**pnpm is a ordinary version of pnpm, which needs Node.js to run**:  
`npm install -g pnpm`

**@pnpm/exe is packaged with Node.js into an executable, so it may be used on a system with no Node.js installed**:  
`npm install -g @pnpm/exe`
