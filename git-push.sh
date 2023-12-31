#!/bin/bash

git add .
echo "What commit message would you like to add?"
read message
git commit -m "$message"  # Enclose $message in quotes
echo "What branch would you like to commit these changes?"
read branch
git push origin $branch
