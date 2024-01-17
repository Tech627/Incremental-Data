let Locked_bat = false
let Locked_dll = false
let Locked_bpm = false
let Locked_pdf = false
let Locked_doc = false 
let Locked_png = false
let Locked_jpg = false 
let Locked_psd = false 
let Locked_ico = false 
let Locked_gif = false 
let Locked_rar = false 
let Locked_zip = false 
let Locked_z7 = false 
let Locked_exe = false 
let Locked_scp = false 
let Locked_File666 = false 
let Locked_File777 = false
let UnlockedBat = document.getElementById("Locked-bat")
let UnlockedDll = document.getElementById("Locked-dll")
let UnlockedBpm = document.getElementById("Locked-bpm")
let UnlockedPdf = document.getElementById("Locked-pdf")
let UnlockedDoc = document.getElementById("Locked-doc")
let UnlockedPng = document.getElementById("Locked-png")
let UnlockedJpg = document.getElementById("Locked-jpg")
let UnlockedPsd = document.getElementById("Locked-psd")
let UnlockedIco = document.getElementById("Locked-ico")
let UnlockedGif = document.getElementById("Locked-gif")
let UnlockedRar = document.getElementById("Locked-rar")
let UnlockedZip = document.getElementById("Locked-zip")
let UnlockedZ7 = document.getElementById("Locked-z7")
let UnlockedExe = document.getElementById("Locked-exe")
let UnlockedScp = document.getElementById("Locked-scp")
let UnlockedFile666 = document.getElementById("Locked-File-666")
let UnlockedFile777 = document.getElementById("Locked-File-777")

function Unlocker() {
    if(player.Level.gte(3)) {
        Locked_bat = true
    }
    if(player.Level.gte(6)) {
        Locked_dll = true
    }
    if(player.Level.gte(9)) {
        Locked_bpm = true
    }
    if(player.Level.gte(12)) {
        Locked_pdf = true
    }
    if(player.Level.gte(16)) {
        Locked_doc = true
    }
    if(player.Level.gte(20)) {
        Locked_png = true
    }
    if(player.Level.gte(22)) {
        Locked_jpg = true
    }
    if(player.Level.gte(25)) {
        Locked_psd = true
    }
    if(player.Level.gte(28)) {
        Locked_ico = true
    }
    if(player.Level.gte(30)) {
        Locked_gif = true
    }
    if(player.Level.gte(32)) {
        Locked_rar = true
    }
    if(player.Level.gte(34)) {
        Locked_zip = true
    }
    if(player.Level.gte(35)) {
        Locked_z7 = true
    }
    if(player.Level.gte(36)) {
        Locked_exe = true
    }
    if(player.Level.gte(39)) {
        Locked_scp = true
    }
    if(player.Level.gte(43)) {
        Locked_File666 = true
    }
    if(player.Level.gte(45)) {
        Locked_File777 = true
    }
    if(Locked_bat === true) {
        UnlockedBat.remove("Locked-bat")
        player.bat.unlocked = true
    }
    if(Locked_dll === true) {
        UnlockedDll.remove("Locked-dll")
        player.dll.unlocked = true
    }
    if(Locked_bpm === true) {
        UnlockedBpm.remove("Locked-bpm")
        player.bpm.unlocked = true
    }
    if(Locked_pdf === true) {
        UnlockedPdf.remove("Locked-pdf")
        player.pdf.unlocked = true
    }
    if(Locked_doc === true) {
        UnlockedDoc.remove("Locked-doc")
        player.doc.unlocked = true
    }
    if(Locked_png === true) {
        UnlockedPng.remove("Locked-png")
        player.png.unlocked = true
    }
    if(Locked_jpg === true) {
        UnlockedJpg.remove("Locked-jpg")
        player.jpg.unlocked = true
    }
    if(Locked_psd === true) {
        UnlockedPsd.remove("Locked-psd")
        player.psd.unlocked = true
    }
    if(Locked_ico === true) {
        UnlockedIco.remove("Locked-ico")
        player.ico.unlocked = true
    }
    if(Locked_gif === true) {
        UnlockedGif.remove("Locked-gif")
        player.gif.unlocked = true
    }
    if(Locked_rar === true) {
        UnlockedRar.remove("Locked-rar")
        player.rar.unlocked = true
    }
    if(Locked_zip === true) {
        UnlockedZip.remove("Locked-zip")
        player.zip.unlocked = true
    }
    if(Locked_z7 === true) {
        UnlockedZ7.remove("Locked-z7")
        player.z7.unlocked = true
    }
    if(Locked_exe === true) {
        UnlockedExe.remove("Locked-exe")
        player.exe.unlocked = true
    }
    if(Locked_scp === true) {
        UnlockedScp.remove("Locked-scp")
        player.scp.unlocked = true
    }
    if(Locked_File666 === true) {
        UnlockedFile666.remove("Locked-File-666")
        player.File_666.unlocked = true
    }
    if(Locked_File777 === true) {
        UnlockedFile777.remove("Locked-File-777")
        player.File_777.unlocked = true
    }
}

setInterval(Unlocker, 1000/20)