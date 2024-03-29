function Gameloop() {
    player.txt.timer = player.txt.timer.sub(1 / 20);
    if(player.bat.unlocked === true) {
        player.bat.timer = player.bat.timer.sub(1 / 20);
    }
    if(player.dll.unlocked === true) {
        player.dll.timer = player.dll.timer.sub(1 / 20);
    }
    if(player.bpm.unlocked === true) {
        player.bpm.timer = player.bpm.timer.sub(1 / 20);
    }
    if(player.pdf.unlocked === true) {
        player.pdf.timer = player.pdf.timer.sub(1 / 20);
    }
    if(player.doc.unlocked === true) {
        player.doc.timer = player.doc.timer.sub(1 / 20);
    }
    if(player.png.unlocked === true) {
        player.png.timer = player.png.timer.sub(1 / 20);
    }
    if(player.jpg.unlocked === true) {
        player.jpg.timer = player.jpg.timer.sub(1 / 20);
    }
    if(player.psd.unlocked === true) {
        player.psd.timer = player.psd.timer.sub(1 / 20);
    }
    if(player.ico.unlocked === true) {
        player.ico.timer = player.ico.timer.sub(1 / 20);
    }
    if(player.gif.unlocked === true) {
        player.gif.timer = player.gif.timer.sub(1 / 20);
    }
    if(player.rar.unlocked === true) {
        player.rar.timer = player.rar.timer.sub(1 / 20);
    }
    if(player.zip.unlocked === true) {
        player.zip.timer = player.zip.timer.sub(1 / 20);
    }
    if(player.z7.unlocked === true) {
        player.z7.timer = player.z7.timer.sub(1 / 20);
    }
    if(player.exe.unlocked === true) {
        player.exe.timer = player.exe.timer.sub(1 / 20);
    }
    if(player.scp.unlocked === true) {
        player.scp.timer = player.scp.timer.sub(1 / 20);
    }
    if(player.File_666.unlocked === true) {
        player.File_666.timer = player.File_666.timer.sub(1 / 20);
    }
    if(player.File_777.unlocked === true) {
        player.File_777.timer = player.File_777.timer.sub(1 / 20);
    }
    if(player.txt.timer.gt(0)) {
        document.getElementById("txt-timer-producer").textContent = "0:0" + format(player.txt.timer);
    }
    if(player.txt.timer.lt(0)) {
        player.txt.timer = new Decimal(5)
        player.txt.amount = player.txt.amount.add(1);
    }
    if(player.bat.timer.gt(0)) {
        document.getElementById("bat-timer-producer").textContent = "0:0" + format(player.bat.timer);
    }
    if(player.bat.timer.lt(0)) {
        player.bat.timer = new Decimal(8)
        player.bat.amount = player.bat.amount.add(1);
    }
    if(player.dll.timer.gt(0)) {
        document.getElementById("dll-timer-producer").textContent = "0:" + format(player.dll.timer);
    }
    if(player.dll.timer.lt(0)) {
        player.dll.timer = new Decimal(12)
        player.dll.amount = player.dll.amount.add(1);
    }
    if(player.bpm.timer.gt(0)) {
        document.getElementById("bpm-timer-producer").textContent = "0:" + format(player.bpm.timer);
    }
    if(player.bpm.timer.lt(0)) {
        player.bpm.timer = new Decimal(15)
        player.bpm.amount = player.bpm.amount.add(1);
    }
    if(player.pdf.timer.gt(0)) {
        document.getElementById("pdf-timer-producer").textContent = "0:" + format(player.pdf.timer);
    }
    if(player.pdf.timer.lt(0)) {
        player.pdf.timer = new Decimal(19)
        player.pdf.amount = player.pdf.amount.add(1);
    }
    if(player.doc.timer.gt(0)) {
        document.getElementById("doc-timer-producer").textContent = "0:" + format(player.doc.timer)
    }
    if(player.doc.timer.lt(0)) {
        player.doc.timer = new Decimal(22)
        player.doc.amount = player.doc.amount.add(1);
    }
    if(player.png.timer.gt(0)) {
        document.getElementById("png-timer-producer").textContent = "0:" + format(player.png.timer);
    }
    if(player.png.timer.lt(0)) {
        player.png.timer = new Decimal(28)
        player.png.amount = player.png.amount.add(1);
    }
    if(player.jpg.timer.gt(0)) {
        document.getElementById("jpg-timer-producer").textContent = "0:" + format(player.jpg.timer);
    }
    if(player.jpg.timer.lt(0)) {
        player.jpg.timer = new Decimal(33)
        player.jpg.amount = player.jpg.amount.add(1);
    }
    if(player.psd.timer.gt(0)) {
        document.getElementById("psd-timer-producer").textContent = "0:" + format(player.psd.timer);
    }
    if(player.psd.timer.lt(0)) {
        player.psd.timer = new Decimal(38)
        player.psd.amount = player.psd.amount.add(1);
    }
    if(player.ico.timer.gt(0)) {
        document.getElementById("ico-timer-producer").textContent = "0:" + format(player.ico.timer);
    }
    if(player.ico.timer.lt(0)) {
        player.ico.timer = new Decimal(44)
        player.ico.amount = player.ico.amount.add(1);
    }
    if(player.gif.timer.gt(0)) {
        document.getElementById("gif-timer-producer").textContent = "0:" + format(player.gif.timer);
    }
    if(player.gif.timer.lt(0)) {
        player.gif.timer = new Decimal(49)
        player.gif.amount = player.gif.amount.add(1);
    }
    if(player.rar.timer.gt(0)) {
        document.getElementById("rar-timer-producer").textContent = "0:" + format(player.rar.timer);
    }
    if(player.rar.timer.lt(0)) {
        player.rar.timer = new Decimal(56)
        player.rar.amount = player.rar.amount.add(1);
    }
    if(player.zip.timer.gt(0)) {
        document.getElementById("zip-timer-producer").textContent = format(player.zip.timer);
    }
    if(player.zip.timer.lt(0)) {
        player.zip.timer = new Decimal(66)
        player.zip.amount = player.zip.amount.add(1);
    }
    if(player.z7.timer.gt(0)) {
        document.getElementById("z7-timer-producer").textContent = format(player.z7.timer);   
    }
    if(player.z7.timer.lt(0)) {
        player.z7.timer = new Decimal(83)
        player.z7.amount = player.z7.amount.add(1);
    }
    if(player.exe.timer.gt(0)) {
        document.getElementById("exe-timer-producer").textContent = format(player.exe.timer);
    }
    if(player.exe.timer.lt(0)) {
        player.exe.timer = new Decimal(112)
        player.exe.amount = player.exe.amount.add(1);
    }
    if(player.scp.timer.gt(0)) {
        document.getElementById("scp-timer-producer").textContent =  format(player.scp.timer);
    }
    if(player.scp.timer.lt(0)) {
        player.scp.timer = new Decimal(158)
        player.scp.amount = player.scp.amount.add(1);
    }
    if(player.File_666.timer.gt(0)) {
        document.getElementById("File-666-timer-producer").textContent = format(player.File_666.timer);
    }
    if(player.File_666.timer.lt(0)) {
        player.File_666.timer = new Decimal(212)
        player.File_666.amount = player.File_666.amount.add(1);
    }
    if(player.File_777.timer.gt(0)) {
        document.getElementById("File-777-timer-producer").textContent = format(player.File_777.timer);
    }
    if(player.File_777.timer.lt(0)) {
        player.File_777.timer = new Decimal(333)
        player.File_777.amount = player.File_777.amount.add(1);
    }
    player.Bytes = player.Bytes.add(player.txt.amount.div(20))
    player.Bytes = player.Bytes.add(player.bat.amount.mul(12).div(20))
    player.Bytes = player.Bytes.add(player.dll.amount.mul(21).div(20))
    player.Bytes = player.Bytes.add(player.bpm.amount.mul(96).div(20))
    player.Bytes = player.Bytes.add(player.pdf.amount.mul(242).div(20))
    player.Bytes = player.Bytes.add(player.doc.amount.mul(919).div(20))
    player.Bytes = player.Bytes.add(player.png.amount.mul(2880).div(20))
    player.Bytes = player.Bytes.add(player.jpg.amount.mul(1.198e4).div(20))
    player.Bytes = player.Bytes.add(player.psd.amount.mul(5.417e4).div(20))
    player.Bytes = player.Bytes.add(player.ico.amount.mul(2.624e5).div(20))
    player.Bytes = player.Bytes.add(player.gif.amount.mul(8.9751e5).div(20))
    player.Bytes = player.Bytes.add(player.rar.amount.mul(2.76e6).div(20))
    player.Bytes = player.Bytes.add(player.zip.amount.mul(3.251e7).div(20))
    player.Bytes = player.Bytes.add(player.z7.amount.mul(1.0521e8).div(20))
    player.Bytes = player.Bytes.add(player.exe.amount.mul(2.88e9).div(20))
    player.Bytes = player.Bytes.add(player.scp.amount.mul(3.111e10).div(20))
    player.Bytes = player.Bytes.add(player.File_666.amount.mul(6.66667e11).div(20))
    player.Bytes = player.Bytes.add(player.File_777.amount.mul(1.777e13).div(20))
    document.getElementById("txt-number").textContent = ".txt = " + formatWhole(player.txt.amount)
    document.getElementById("bat-number").textContent = ".bat = " + formatWhole(player.bat.amount)
    document.getElementById("dll-number").textContent = ".dll = " + formatWhole(player.dll.amount)
    document.getElementById("bpm-number").textContent = ".bpm = " + formatWhole(player.bpm.amount)
    document.getElementById("pdf-number").textContent = ".pdf = " + formatWhole(player.pdf.amount)
    document.getElementById("doc-number").textContent = ".doc = " + formatWhole(player.doc.amount)
    document.getElementById("png-number").textContent = ".png = " + formatWhole(player.png.amount)
    document.getElementById("jpg-number").textContent = ".jpg = " + formatWhole(player.jpg.amount)
    document.getElementById("psd-number").textContent = ".psd = " + formatWhole(player.psd.amount)
    document.getElementById("ico-number").textContent = ".ico = " + formatWhole(player.ico.amount)
    document.getElementById("gif-number").textContent = ".gif = " + formatWhole(player.gif.amount)
    document.getElementById("rar-number").textContent = ".rar = " + formatWhole(player.rar.amount)
    document.getElementById("zip-number").textContent = ".zip = " + formatWhole(player.zip.amount)
    document.getElementById("z7-number").textContent = ".7z = " + formatWhole(player.z7.amount)
    document.getElementById("exe-number").textContent = ".exe = " + formatWhole(player.exe.amount)
    document.getElementById("scp-number").textContent = ".scp = " + formatWhole(player.scp.amount)
    document.getElementById("File-666-number").textContent = ".666 = " + formatWhole(player.File_666.amount)
    document.getElementById("File-777-number").textContent = ".777 = " + formatWhole(player.File_777.amount)
}
setInterval(Gameloop,1000/20)
setInterval(Save, 10000)