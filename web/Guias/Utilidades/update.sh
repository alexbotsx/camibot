#!/bin/bash
pacman -Syu --noconfirm
cd $HOME/mystic/ || echo Falla. Mystic no Existe.
#git stash && git pull https://www.instagram.com/clan_space_blank?igsh=Ymh3aXBzc2V5ZHE4.git && git stash pop || echo "#########Error al actualizar mystic"
#npm install @whiskeysockets/baileys@latest @adiwajshing/baileys@latest --force || echo "#########Error al instalar en mystic"
npm install --force
npm start .
