#!/bin/bash
set -e

apt-get update -y

apt-get install -y ca-certificates curl gnupg lsb-release

# Ajouter clé officielle Docker
mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Ajouter dépôt Docker
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" \
    > /etc/apt/sources.list.d/docker.list

apt-get update -y
apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
