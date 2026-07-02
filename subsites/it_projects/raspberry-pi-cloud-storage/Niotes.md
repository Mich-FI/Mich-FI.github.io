**MOST COMMANDS FROM A ENRIQUE NEYRA'S VIDEO: https://www.youtube.com/watch?v=jOYG10CvZZA\&t=124s**



**Setup ssh connection to raspberry pi 4**

ssh michpi@picloud.local



**Change memory setting to set full compatability for NextCloud**

echo "kernel=kernel8.img" | sudo tee -a /boot/firmware/config.txt



**Install rpi-clone**

curl https://raw.githubusercontent.com/geerlingguy/rpi-clone/master/install | sudo bash



**Clone the SD-card data into an external HDD**

lsblk

sudo rpi-clone sda



**Change the boot order**

sudo raspi-config



**Needed to update rpi-eeprom, did a system upgrade first and separately updated rpi-eeprom**

sudo apt update

sudo apt full-upgrade

rpi-eeprom-update

sudo rpi-eeprom-update -a

sudo reboot



**Try to change the boot order again**

sudo raspi-config



**Unplug the power cable for the raspberry pi, take out SD-card and plug the power back in**



**Didn't actually change the boot order, decided to keep OS and boot on the SD-card and the HDD as storage**



**Get NextCloud running on the Pi**

sudo apt install snapd -y

sudo snap install nextcloud



**Open NexCloud setup on a browser**

ifconfig (to see the ip address of the pi)

Open the ip address



**Setup admin name and password and data folder**



**Install tailscale to access the NextCloud network storage from other devices**

**Turn tailscale on**

**Go to authentication website, I used GitHub and pressed connect device**



**Set Nextcloud to Trust Tailscale** 

sudo snap run nextcloud.occ config:system:set trusted\_proxies 0 --value=127.0.0.1 

sudo snap run nextcloud.occ config:system:set overwriteprotocol --value=https 



**Set the Trusted Domain (Replace YOUR-TAILSCALE-DNS-NAME below)** 

sudo snap run nextcloud.occ config:system:set trusted\_domains 1 --value="YOUR-TAILSCALE-DNS-NAME" 
(Replace the tailscale DNS name with the Raspberry pi DNS name)



**Turn on the Secure Tunnel** 

sudo tailscale serve --bg --https=443 http://localhost:80



**Needed to enable Tailscale Serve through https://login.tailscale.com/f/serve?node=nuPw7CUHvW11CNTRL and redo the command**


**Now time for testing!**



**Login through https://picloud.tail111650.ts.net/**



**Create another account on NextCloud**


**Try the account on my laptop, it works!! I can download and delete files!**

**It even works on my phone!**



**I downloaded the NextCloud software on my arch linux**

