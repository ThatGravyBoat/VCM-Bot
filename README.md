# Voice Channel Maker (VCM) Bot
This is a Discord Bot that creates Discord voice channels when a user enters a specific voice channel and deletes them after all members leave that voice channel. 

 ## Config
 ```json
 { 
    "createVoiceChannel": "",
    "voiceName": "Cool Voice Channel",
    "discordToken": "",
    "VoiceCategory": ""
}
```
The `createVoiceChannel` line is the channel id which you want the user to enter to make a voice channel.

The `voiceName` line is what will come after the users name so for example with this config it will look like this for the voice channel that gets created `ThatGravyBoat's Cool Voice Channel`.

The `discordToken` line is the Discord bot token that you get from the [Discord developer page](https://discordapp.com/developers/applications).

The `voiceCategory` line is the category id that the user cated voice channels will go into.

## Setup
 - Download the files either via zip from github or git clone.
 - If downloaded zip extract all files.
 - Fill in the information needed in the `config.json` file, look at the config section of the readme to know how to get the items needed in the config file.
 - Run the command `node app.js` in the folder where the files are located.
