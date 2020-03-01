const Discord = require('discord.js')
const fs = require('fs');
const client = new Discord.Client()
const voiceChannelArray = [];
let rawdata = fs.readFileSync('config.json');
let config = JSON.parse(rawdata);

client.on('ready', () => {client.user.setActivity('you join channels', {type: "WATCHING"})})
client.on('voiceStateUpdate', (oldMember, newMember) => {
    if(newMember.voiceChannelID == config.createVoiceChannel) {
        newMember.guild.createChannel(newMember.displayName + `'s ` + config.voiceName, { type: 'voice', parent: config.voiceCategory})
            .then(createdChannel => { var id = createdChannel.id 
                    newMember.setVoiceChannel(id)
                    setTimeout(function () {
                        if (createdChannel.members.size < 1){createdChannel.delete()}
                        else {voiceChannelArray.push(createdChannel)}
                    }, 3000);
                }
            ).catch(console.error);
    }
    if(newMember.voiceChannel === undefined){
        voiceChannelArray.forEach(function(element, index, object) {
            if(element.members.size < 1) {
                element.delete()
                voiceChannelArray.splice(index, 1);
            }});
    }
})
client.login(config.discordToken)