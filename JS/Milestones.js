function Milestone() {
    player.txt.Milestone.requirment = player.txt.Milestone.requirment.add(player.txt.amount);
    if(player.txt.amount.lte(25)) {
        document.getElementById("txt-boost-requirment").textContent = formatWhole(player.txt.amount) + " / 25"
    }
    if(player.txt.amount.gte(25)) {
        player.txt.Milestone.boost = new Decimal(2);
    }
    if(player.txt.amount.gt(25)) {
        document.getElementById("txt-boost-requirment").textContent = formatWhole(player.txt.amount) + " / 50"
    }
    if(player.txt.amount.gte(50)) {
        player.txt.Milestone.boost = new Decimal(2.5);
    }
    if(player.txt.amount.gt(50)) {
        document.getElementById("txt-boost-requirment").textContent = formatWhole(player.txt.amount) + " / 75"
    }
    if(player.txt.amount.gte(75)) {
        player.txt.Milestone.boost = new Decimal(3.12);
    }
    if(player.txt.amount.gt(75)) {
        document.getElementById("txt-boost-requirment").textContent = formatWhole(player.txt.amount) + " / 100"
    }
    if(player.txt.amount.gte(100)) {
        player.txt.Milestone.boost = new Decimal(4.68);
    }
    if(player.txt.amount.gt(100)) {
        document.getElementById("txt-boost-requirment").textContent = formatWhole(player.txt.amount) + " / 125"
    }
    if(player.txt.amount.gte(150)) {
        player.txt.Milestone.boost = new Decimal(7.02);
    }
    if(player.txt.amount.gt(150)) {
        document.getElementById("txt-boost-requirment").textContent = formatWhole(player.txt.amount) + " / 200"
    }
    if(player.txt.amount.gte(200)) {
        player.txt.Milestone.boost = new Decimal(10.53);
    }
    if(player.txt.amount.gte(200)) {
        document.getElementById("txt-boost-requirment").textContent = formatWhole(player.txt.amount) + " / 250"
    }
    if(player.txt.amount.gte(250)) {
        player.txt.Milestone.boost = new Decimal(15.79);
        document.getElementById("txt-boost-requirment").textContent = formatWhole(player.txt.amount)
    }
    player.bat.Milestone.requirment = player.bat.Milestone.requirment.add(player.bat.amount);
    if(player.bat.amount.lte(25)) {
        document.getElementById("bat-boost-requirment").textContent = formatWhole(player.bat.amount) + " / 25"
    }
    if(player.bat.amount.gte(25)) {
        player.bat.Milestone.boost = new Decimal(2);
    }
    if(player.bat.amount.gt(25)) {
        document.getElementById("bat-boost-requirment").textContent = formatWhole(player.bat.amount) + " / 50"
    }
    if(player.bat.amount.gte(50)) {
        player.bat.Milestone.boost = new Decimal(2.5);
    }
    if(player.bat.amount.gt(50)) {
        document.getElementById("bat-boost-requirment").textContent = formatWhole(player.bat.amount) + " / 75"
    }
    if(player.bat.amount.gte(75)) {
        player.bat.Milestone.boost = new Decimal(3.12);
    }
    if(player.bat.amount.gt(75)) {
        document.getElementById("bat-boost-requirment").textContent = formatWhole(player.bat.amount) + " / 100"
    }
    if(player.bat.amount.gte(100)) {
        player.bat.Milestone.boost = new Decimal(4.68);
    }
    if(player.bat.amount.gt(100)) {
        document.getElementById("bat-boost-requirment").textContent = formatWhole(player.bat.amount) + " / 125"
    }
    if(player.bat.amount.gte(150)) {
        player.bat.Milestone.boost = new Decimal(7.02);
    }
    if(player.bat.amount.gt(150)) {
        document.getElementById("bat-boost-requirment").textContent = formatWhole(player.bat.amount) + " / 200"
    }
    if(player.bat.amount.gte(200)) {
        player.bat.Milestone.boost = new Decimal(10.53);
    }
    if(player.bat.amount.gte(200)) {
        document.getElementById("bat-boost-requirment").textContent = formatWhole(player.bat.amount) + " / 250"
    }
    if(player.bat.amount.gte(250)) {
        player.bat.Milestone.boost = new Decimal(15.79);
        document.getElementById("bat-boost-requirment").textContent = formatWhole(player.bat.amount)
    }
    document.getElementById("bat-booster").textContent = "/" + format(player.bat.Milestone.boost) + " to the txt timer"
    player.bat.timer = player.bat.timer.div(player.bat.Milestone.boost).sub(new Decimal(15).div(100))
    document.getElementById("txt-booster").textContent = "/" + format(player.txt.Milestone.boost) + " to the txt timer"
    player.txt.timer = player.txt.timer.div(player.txt.Milestone.boost).sub(new Decimal(15).div(100))
}

setInterval(Milestone, 1000/20)