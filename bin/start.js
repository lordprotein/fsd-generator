#!/usr/bin/env node

const { spawn } = require('child_process')
const path = require('path')

const cwd = path.resolve(__dirname, '..')

spawn('npx', ['plop'], {
  cwd,
  stdio: 'inherit'
})
