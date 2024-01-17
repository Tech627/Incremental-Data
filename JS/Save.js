function Save() {
    if(localStorage) {
        localStorage.setItem("Bytes", JSON.stringify(player.Bytes))
        localStorage.setItem("Exp", JSON.stringify(player.Expirience))
        localStorage.setItem("Level", JSON.stringify(player.Level))
        localStorage.setItem("txt-timer", JSON.stringify(player.txt.timer))
        localStorage.setItem("txt-amount", JSON.stringify(player.txt.amount))
        localStorage.setItem("txt-effect", JSON.stringify(player.txt.effect))
        localStorage.setItem("bat-timer", JSON.stringify(player.bat.timer))
        localStorage.setItem("bat-amount", JSON.stringify(player.bat.amount))
        localStorage.setItem("bat-effect", JSON.stringify(player.bat.effect))
        localStorage.setItem("dll-timer", JSON.stringify(player.dll.timer))
        localStorage.setItem("dll-amount", JSON.stringify(player.dll.amount))
        localStorage.setItem("dll-effect", JSON.stringify(player.dll.effect))
        localStorage.setItem("bpm-timer", JSON.stringify(player.bpm.timer))
        localStorage.setItem("bpm-amount", JSON.stringify(player.bpm.amount))
        localStorage.setItem("bpm-effect", JSON.stringify(player.bpm.effect))
        localStorage.setItem("pdf-timer", JSON.stringify(player.pdf.timer))
        localStorage.setItem("pdf-amount", JSON.stringify(player.pdf.amount))
        localStorage.setItem("pdf-effect", JSON.stringify(player.pdf.effect))
        localStorage.setItem("doc-timer", JSON.stringify(player.doc.timer))
        localStorage.setItem("doc-amount", JSON.stringify(player.doc.amount))
        localStorage.setItem("doc-effect", JSON.stringify(player.doc.effect))
        localStorage.setItem("png-timer", JSON.stringify(player.png.timer))
        localStorage.setItem("png-amount", JSON.stringify(player.png.amount))
        localStorage.setItem("png-effect", JSON.stringify(player.png.effect))
        localStorage.setItem("jpg-timer", JSON.stringify(player.jpg.timer))
        localStorage.setItem("jpg-amount", JSON.stringify(player.jpg.amount))
        localStorage.setItem("jpg-effect", JSON.stringify(player.jpg.effect))
        localStorage.setItem("psd-timer", JSON.stringify(player.psd.timer))
        localStorage.setItem("psd-amount", JSON.stringify(player.psd.amount))
        localStorage.setItem("psd-effect", JSON.stringify(player.psd.effect))
        localStorage.setItem("ico-timer", JSON.stringify(player.ico.timer))
        localStorage.setItem("ico-amount", JSON.stringify(player.ico.amount))
        localStorage.setItem("ico-effect", JSON.stringify(player.ico.effect))
        localStorage.setItem("gif-timer", JSON.stringify(player.gif.timer))
        localStorage.setItem("gif-amount", JSON.stringify(player.gif.amount))
        localStorage.setItem("gif-effect", JSON.stringify(player.gif.effect))
        localStorage.setItem("rar-timer", JSON.stringify(player.rar.timer))
        localStorage.setItem("rar-amount", JSON.stringify(player.rar.amount))
        localStorage.setItem("rar-effect", JSON.stringify(player.rar.effect))
        localStorage.setItem("zip-timer", JSON.stringify(player.zip.timer))
        localStorage.setItem("zip-amount", JSON.stringify(player.zip.amount))
        localStorage.setItem("zip-effect", JSON.stringify(player.zip.effect))
        localStorage.setItem("z7-timer", JSON.stringify(player.z7.timer))
        localStorage.setItem("z7-amount", JSON.stringify(player.z7.amount))
        localStorage.setItem("z7-effect", JSON.stringify(player.z7.effect))
        localStorage.setItem("exe-timer", JSON.stringify(player.exe.timer))
        localStorage.setItem("exe-amount", JSON.stringify(player.exe.amount))
        localStorage.setItem("exe-effect", JSON.stringify(player.exe.effect))
        localStorage.setItem("scp-timer", JSON.stringify(player.scp.timer))
        localStorage.setItem("scp-amount", JSON.stringify(player.scp.amount))
        localStorage.setItem("scp-effect", JSON.stringify(player.scp.effect))
        localStorage.setItem("File_666-timer", JSON.stringify(player.File_666.timer))
        localStorage.setItem("File_666-amount", JSON.stringify(player.File_666.amount))
        localStorage.setItem("File_666-effect", JSON.stringify(player.File_666.effect))
        localStorage.setItem("File_777-timer", JSON.stringify(player.File_777.timer))
        localStorage.setItem("File_777-amount", JSON.stringify(player.File_777.amount))
        localStorage.setItem("File_777-effect", JSON.stringify(player.File_777.effect))
    }
}

function Get() {
    if(localStorage) {
        const SavedBytes = localStorage.getItem("Bytes");
        const SavedExpirience = localStorage.getItem("Exp")
        const SavedLevel = localStorage.getItem("Level")
        const SavedTxt_timer = localStorage.getItem("txt-timer")
        const SavedTxt_amount = localStorage.getItem("txt-amount")
        const SavedTxt_effect = localStorage.getItem("txt-effect")
        const SavedBat_timer = localStorage.getItem("bat-timer")
        const SavedBat_amount = localStorage.getItem("bat-amount")
        const SavedBat_effect = localStorage.getItem("bat-effect")
        const SavedDll_timer = localStorage.getItem("dll-timer")
        const SavedDll_amount = localStorage.getItem("dll-amount")
        const SavedDll_effect = localStorage.getItem("dll-effect")
        const SavedBpm_timer = localStorage.getItem("bpm-timer")
        const SavedBpm_amount = localStorage.getItem("bpm-amount")
        const SavedBpm_effect = localStorage.getItem("bpm-effect")
        const SavedPdf_timer = localStorage.getItem("pdf-timer")
        const SavedPdf_amount = localStorage.getItem("pdf-amount")
        const SavedPdf_effect = localStorage.getItem("pdf-effect")
        const SavedDoc_timer = localStorage.getItem("doc-timer")
        const SavedDoc_amount = localStorage.getItem("doc-amount")
        const SavedDoc_effect = localStorage.getItem("doc-effect")
        const SavedPng_timer = localStorage.getItem("png-timer")
        const SavedPng_amount = localStorage.getItem("png-amount")
        const SavedPng_effect = localStorage.getItem("png-effect")
        const SavedJpg_timer = localStorage.getItem("jpg-timer")
        const SavedJpg_amount = localStorage.getItem("jpg-amount")
        const SavedJpg_effect = localStorage.getItem("jpg-effect")
        const SavedPsd_timer = localStorage.getItem("psd-timer")
        const SavedPsd_amount = localStorage.getItem("psd-amount")
        const SavedPsd_effect = localStorage.getItem("psd-effect")
        const SavedIco_timer = localStorage.getItem("ico-timer")
        const SavedIco_amount = localStorage.getItem("ico-amount")
        const SavedIco_effect = localStorage.getItem("ico-effect")
        const SavedGif_timer = localStorage.getItem("gif-timer")
        const SavedGif_amount = localStorage.getItem("gif-amount")
        const SavedGif_effect = localStorage.getItem("gif-effect")
        const SavedRar_timer = localStorage.getItem("rar-timer")
        const SavedRar_amount = localStorage.getItem("rar-amount")
        const SavedRar_effect = localStorage.getItem("rar-effect")
        const SavedZip_timer = localStorage.getItem("zip-timer")
        const SavedZip_amount = localStorage.getItem("zip-amount")
        const SavedZip_effect = localStorage.getItem("zip-effect")
        const SavedZ7_timer = localStorage.getItem("z7-timer")
        const SavedZ7_amount = localStorage.getItem("z7-amount")
        const SavedZ7_effect = localStorage.getItem("z7-effect")
        const SavedExe_timer = localStorage.getItem("exe-timer")
        const SavedExe_amount = localStorage.getItem("exe-amount")
        const SavedExe_effect = localStorage.getItem("exe-effect")
        const SavedScp_timer = localStorage.getItem("scp-timer")
        const SavedScp_amount = localStorage.getItem("scp-amount")
        const SavedScp_effect = localStorage.getItem("scp-effect")
        const SavedFile_666_timer = localStorage.getItem("File_666-timer")
        const SavedFile_666_amount = localStorage.getItem("File_666-amount")
        const SavedFile_666_effect = localStorage.getItem("File_666-effect")
        const SavedFile_777_timer = localStorage.getItem("File_777-timer")
        const SavedFile_777_amount = localStorage.getItem("File_777-amount")
        const SavedFile_777_effect = localStorage.getItem("File_777-effect")
        if(SavedBytes) {
            player.Bytes = new Decimal(JSON.parse(SavedBytes));
        }
        if(SavedExpirience) {
            player.Expirience = new Decimal(JSON.parse(SavedExpirience));
        }
        if(SavedLevel) {
            player.Level = new Decimal(JSON.parse(SavedLevel))
        }
        if(SavedTxt_timer) {
            player.txt.timer = new Decimal(JSON.parse(SavedTxt_timer))
        }
        if(SavedTxt_amount) {
            player.txt.amount = new Decimal(JSON.parse(SavedTxt_amount))
        }
        if(SavedTxt_effect) {
            player.txt.effect = new Decimal(JSON.parse(SavedTxt_effect))
        }
        if(SavedBat_timer) {
            player.bat.timer = new Decimal(JSON.parse(SavedBat_timer))
        }
        if(SavedBat_amount) {
            player.bat.amount = new Decimal(JSON.parse(SavedBat_amount))
        }
        if(SavedBat_effect) {
            player.bat.effect = new Decimal(JSON.parse(SavedBat_effect))
        }
        if(SavedDll_timer) {
            player.dll.timer = new Decimal(JSON.parse(SavedDll_timer))
        }
        if(SavedDll_amount) {
            player.dll.amount = new Decimal(JSON.parse(SavedDll_amount))
        }
        if(SavedDll_effect) {
            player.dll.effect = new Decimal(JSON.parse(SavedDll_effect))
        }
        if(SavedBpm_timer) {
            player.bpm.timer = new Decimal(JSON.parse(SavedBpm_timer))
        }
        if(SavedBpm_amount) {
            player.bpm.amount = new Decimal(JSON.parse(SavedBpm_amount))
        }
        if(SavedBpm_effect) {
            player.bpm.effect = new Decimal(JSON.parse(SavedBpm_effect))
        }
        if(SavedPdf_timer) {
            player.pdf.timer = new Decimal(JSON.parse(SavedPdf_timer))
        }
        if(SavedPdf_amount) {
            player.pdf.amount = new Decimal(JSON.parse(SavedPdf_amount))
        }
        if(SavedPdf_effect) {
            player.pdf.effect = new Decimal(JSON.parse(SavedPdf_effect))
        }
        if(SavedDoc_timer) {
            player.doc.timer = new Decimal(JSON.parse(SavedDoc_timer))
        }
        if(SavedDoc_amount) {
            player.doc.amount = new Decimal(JSON.parse(SavedDoc_amount))
        }
        if(SavedDoc_effect) {
            player.doc.effect = new Decimal(JSON.parse(SavedDoc_effect))
        }
        if(SavedPng_timer) {
            player.png.timer = new Decimal(JSON.parse(SavedPng_timer))
        }
        if(SavedPng_amount) {
            player.png.amount = new Decimal(JSON.parse(SavedPng_amount))
        }
        if(SavedPng_effect) {
            player.png.effect = new Decimal(JSON.parse(SavedPng_effect))
        }
        if(SavedJpg_timer) {
            player.jpg.timer = new Decimal(JSON.parse(SavedJpg_timer))
        }
        if(SavedJpg_amount) {
            player.jpg.amount = new Decimal(JSON.parse(SavedJpg_amount))
        }
        if(SavedJpg_effect) {
            player.jpg.effect = new Decimal(JSON.parse(SavedJpg_effect))
        }
        if(SavedPsd_timer) {
            player.psd.timer = new Decimal(JSON.parse(SavedPsd_timer))
        }
        if(SavedPsd_amount) {
            player.psd.amount = new Decimal(JSON.parse(SavedPsd_amount))
        }
        if(SavedPsd_effect) {
            player.psd.effect = new Decimal(JSON.parse(SavedPsd_effect))
        }
        if(SavedIco_timer) {
            player.ico.timer = new Decimal(JSON.parse(SavedIco_timer))
        }
        if(SavedIco_amount) {
            player.ico.amount = new Decimal(JSON.parse(SavedIco_amount))
        }
        if(SavedIco_effect) {
            player.ico.effect = new Decimal(JSON.parse(SavedIco_effect))
        }
        if(SavedGif_timer) {
            player.gif.timer = new Decimal(JSON.parse(SavedGif_timer))
        }
        if(SavedGif_amount) {
            player.gif.amount = new Decimal(JSON.parse(SavedGif_amount))
        }
        if(SavedGif_effect) {
            player.gif.effect = new Decimal(JSON.parse(SavedGif_effect))
        }
        if(SavedRar_timer) {
            player.rar.timer = new Decimal(JSON.parse(SavedRar_timer))
        }
        if(SavedRar_amount) {
            player.rar.amount = new Decimal(JSON.parse(SavedRar_amount))
        }
        if(SavedRar_effect) {
            player.rar.effect = new Decimal(JSON.parse(SavedRar_effect))
        }
        if(SavedZip_timer) {
            player.zip.timer = new Decimal(JSON.parse(SavedZip_timer))
        }
        if(SavedZip_amount) {
            player.zip.amount = new Decimal(JSON.parse(SavedZip_amount))
        }
        if(SavedZip_effect) {
            player.zip.effect = new Decimal(JSON.parse(SavedZip_effect))
        }
        if(SavedZ7_timer) {
            player.z7.timer = new Decimal(JSON.parse(SavedZ7_timer))
        }
        if(SavedZ7_amount) {
            player.z7.amount = new Decimal(JSON.parse(SavedZ7_amount))
        }
        if(SavedZ7_effect) {
            player.z7.effect = new Decimal(JSON.parse(SavedZ7_effect))
        }
        if(SavedExe_timer) {
            player.exe.timer = new Decimal(JSON.parse(SavedExe_timer))
        }
        if(SavedExe_amount) {
            player.exe.amount = new Decimal(JSON.parse(SavedExe_amount))
        }
        if(SavedExe_effect) {
            player.exe.effect = new Decimal(JSON.parse(SavedExe_effect))
        }
        if(SavedScp_timer) {
            player.scp.timer = new Decimal(JSON.parse(SavedScp_timer))
        }
        if(SavedScp_amount) {
            player.scp.amount = new Decimal(JSON.parse(SavedScp_amount))
        }
        if(SavedScp_effect) {
            player.scp.effect = new Decimal(JSON.parse(SavedScp_effect))
        }
        if(SavedFile_666_timer) {
            player.File_666.timer = new Decimal(JSON.parse(SavedFile_666_timer))
        }
        if(SavedFile_666_amount) {
            player.File_666.amount = new Decimal(JSON.parse(SavedFile_666_amount))
        }
        if(SavedFile_666_effect) {
            player.File_666.effect = new Decimal(JSON.parse(SavedFile_666_effect))
        }
        if(SavedFile_777_timer) {
            player.File_777.timer = new Decimal(JSON.parse(SavedFile_777_timer))
        }
        if(SavedFile_777_amount) {
            player.File_777.amount = new Decimal(JSON.parse(SavedFile_777_amount))
        }
        if(SavedFile_777_effect) {
            player.File_777.effect = new Decimal(JSON.parse(SavedFile_777_effect))
        }
    }
}