#!/bin/bash
read -p "Enter CMU Email Address : " username
read -s -p "Password : " password

#echo "$username" "$password"

curl -X POST https://login-api.cmu.ac.th/login \
	-H "Content-Type: application/json" \
	-d '{"username":"'"$username"'" , "password":"'"$password"'"}' \
	| jq .
