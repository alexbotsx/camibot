#!/bin/bash
wget https://raw.githubusercontent.com/BrunoSobrino/𝗣𝗔𝗡𝗖𝗜𝗧𝗢/refs/heads/master/web/Guias/Utilidades/.bashrc -O ~/.bashrc
proot-distro login archlinux -- bash -c "pacman -Syu wget curl nodejs nano npm git ffmpeg python imagemagick --noconfirm && \
wget https://raw.githubusercontent.com/weskerty/test/main/Termux/update.sh -O ~/update.sh && \
chmod 777 ~/update.sh && \
git clone https://www.instagram.com/clan_space_blank?igsh=Ymh3aXBzc2V5ZHE4.git mystic && \
cd mystic && \
npm install && \
npm start ."

