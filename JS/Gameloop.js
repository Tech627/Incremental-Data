function Gameloop() {
    player.txt.timer = player.txt.timer.sub(1 / 20);
    player.bat.timer = player.bat.timer.sub(1 / 20);
    player.dll.timer = player.dll.timer.sub(1 / 20);
    player.bpm.timer = player.bpm.timer.sub(1 / 20);
    player.pdf.timer = player.pdf.timer.sub(1 / 20);
    player.doc.timer = player.doc.timer.sub(1 / 20);
    player.png.timer = player.png.timer.sub(1 / 20);
    player.jpg.timer = player.jpg.timer.sub(1 / 20);
    player.psd.timer = player.psd.timer.sub(1 / 20);
    player.ico.timer = player.ico.timer.sub(1 / 20);
    player.gif.timer = player.gif.timer.sub(1 / 20);
    player.rar.timer = player.rar.timer.sub(1 / 20);
    player.zip.timer = player.zip.timer.sub(1 / 20);
    player.z7.timer = player.z7.timer.sub(1 / 20);
    player.exe.timer = player.exe.timer.sub(1 / 20);
    player.scp.timer = player.scp.timer.sub(1 / 20);
    player.File_666.timer = player.File_666.timer.sub(1 / 20);
    player.File_777.timer = player.File_777.timer.sub(1 / 20);
    if(player.txt.timer > 0) {
        document.getElementById("txt-timer-producer").textContent = "0:0" + format(player.txt.timer);
    }
    if(player.txt.timer < 0) {
        player.txt.timer = new Decimal(5)
        player.txt.amount = player.txt.amount.add(1);
        document.getElementById("txt-number").textContent = ".txt = " + format(player.txt.amount)
    }
    if(player.bat.timer > 0) {
        document.getElementById("bat-timer-producer").textContent = "0:0" + format(player.bat.timer);
    }
    if(player.bat.timer < 0) {
        player.bat.timer = new Decimal(8)
        player.bat.amount = player.bat.amount.add(1);
        document.getElementById("bat-number").textContent = ".bat = " + format(player.bat.amount)
    }
    if(player.dll.timer > 0) {
        document.getElementById("dll-timer-producer").textContent = "0:" + format(player.dll.timer);
    }
    if(player.dll.timer < 0) {
        player.dll.timer = new Decimal(12)
        player.dll.amount = player.dll.amount.add(1);
        document.getElementById("dll-number").textContent = ".dll = " + format(player.dll.amount)
    }
    if(player.bpm.timer > 0) {
        document.getElementById("bpm-timer-producer").textContent = "0:" + format(player.bpm.timer);
    }
    if(player.bpm.timer < 0) {
        player.bpm.timer = new Decimal(15)
        player.bpm.amount = player.bpm.amount.add(1);
        document.getElementById("bpm-number").textContent = ".bpm = " + format(player.bpm.amount)
    }
    if(player.pdf.timer > 0) {
        document.getElementById("pdf-timer-producer").textContent = "0:" + format(player.txt.timer);
    }
    if(player.pdf.timer < 0) {
        player.pdf.timer = new Decimal(19)
        player.pdf.amount = player.txt.amount.add(1);
        document.getElementById("pdf-number").textContent = ".pdf = " + format(player.pdf.amount)
    }
    if(player.png.timer > 0) {
        document.getElementById("png-timer-producer").textContent = "0:" + format(player.png.timer);
    }
    if(player.png.timer < 0) {
        player.png.timer = new Decimal(22)
        player.png.amount = player.png.amount.add(1);
        document.getElementById("png-number").textContent = ".png = " + format(player.png.amount)
    }
    if(player.jpg.timer > 0) {
        document.getElementById("jpg-timer-producer").textContent = "0:" + format(player.jpg.timer);
    }
    if(player.jpg.timer < 0) {
        player.jpg.timer = new Decimal(28)
        player.jpg.amount = player.jpg.amount.add(1);
        document.getElementById("jpg-number").textContent = ".jpg = " + format(player.jpg.amount)
    }
    if(player.psd.timer > 0) {
        document.getElementById("psd-timer-producer").textContent = "0:" + format(player.psd.timer);
    }
    if(player.psd.timer < 0) {
        player.psd.timer = new Decimal(33)
        player.psd.amount = player.psd.amount.add(1);
        document.getElementById("psd-number").textContent = ".psd = " + format(player.psd.amount)
    }
    if(player.ico.timer > 0) {
        document.getElementById("ico-timer-producer").textContent = "0:" + format(player.ico.timer);
    }
    if(player.ico.timer < 0) {
        player.ico.timer = new Decimal(38)
        player.ico.amount = player.ico.amount.add(1);
        document.getElementById("ico-number").textContent = ".ico = " + format(player.ico.amount)
    }
    if(player.gif.timer > 0) {
        document.getElementById("gif-timer-producer").textContent = "0:" + format(player.gif.timer);
    }
    if(player.gif.timer < 0) {
        player.gif.timer = new Decimal(44)
        player.gif.amount = player.gif.amount.add(1);
        document.getElementById("gif-number").textContent = ".gif = " + format(player.gif.amount)
    }
    if(player.rar.timer > 0) {
        document.getElementById("rar-timer-producer").textContent = "0:" + format(player.rar.timer);
    }
    if(player.rar.timer < 0) {
        player.rar.timer = new Decimal(49)
        player.rar.amount = player.rar.amount.add(1);
        document.getElementById("rar-number").textContent = ".rar = " + format(player.rar.amount)
    }
    if(player.zip.timer > 0) {
        document.getElementById("zip-timer-producer").textContent = "0:" + format(player.zip.timer);
    }
    if(player.zip.timer < 0) {
        player.zip.timer = new Decimal(56)
        player.zip.amount = player.zip.amount.add(1);
        document.getElementById("zip-number").textContent = ".zip = " + format(player.zip.amount)
    }
    if(player.z7.timer > 0) {
        if(player.z7.timer > 60) {
            document.getElementById("z7-timer-producer").textContent = format(player.z7.timer);   
        }
    }
    if(player.z7.timer < 0) {
        player.z7.timer = new Decimal(5)
        player.z7.amount = player.z7.amount.add(1);
        document.getElementById("z7-number").textContent = ".7z = " + format(player.z7.amount)
    }
    if(player.exe.timer > 0) {
        document.getElementById("exe-timer-producer").textContent = format(player.exe.timer);
    }
    if(player.exe.timer < 0) {
        player.exe.timer = new Decimal(5)
        player.exe.amount = player.exe.amount.add(1);
        document.getElementById("exe-number").textContent = ".exe = " + format(player.exe.amount)
    }
    if(player.scp.timer > 0) {
        document.getElementById("scp-timer-producer").textContent =  format(player.scp.timer);
    }
    if(player.scp.timer < 0) {
        player.scp.timer = new Decimal(5)
        player.scp.amount = player.scp.amount.add(1);
        document.getElementById("scp-number").textContent = ".scp = " + format(player.scp.amount)
    }
    if(player.File_666.timer > 0) {
        document.getElementById("File-666-timer-producer").textContent = format(player.File_666.timer);
    }
    if(player.File_666.timer < 0) {
        player.File_666.timer = new Decimal(5)
        player.File_666.amount = player.txt.amount.add(1);
        document.getElementById("File-666-number").textContent = ".666 = " + format(player.File_666.amount)
    }
    if(player.File_777.timer > 0) {
        document.getElementById("File-777-timer-producer").textContent = format(player.File_777.timer);
    }
    if(player.File_777.timer < 0) {
        player.File_777.timer = new Decimal(5)
        player.File_777.amount = player.File_777.amount.add(1);
        document.getElementById("File-777-number").textContent = ".777 = " + format(player.File_777.amount)
    }
    player.Bytes = player.Bytes.add(player.txt.amount.div(20))
    document.getElementById("Bytes").textContent = format(player.Bytes) + " Bytes"
}
setInterval(Gameloop,1000/20)