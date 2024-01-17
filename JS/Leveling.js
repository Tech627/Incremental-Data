function Leveling() {
    if(player.txt.amount.gte(1)) {
        player.Expirience = player.Expirience.add(0.02 / 20)
    }
    if(player.bat.unlocked === true && player.bat.amount.gte(1)) {
        player.Expirience = player.Expirience.add(0.06 / 20)
    }
    if(player.Level.eq(1)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 10"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(2)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(2)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 30"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(3)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(3)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 90"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(4)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(4)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 270"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(5)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(5)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 810"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(6)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(6)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 2.43e3"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(7)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(7)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 7.29e3"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(8)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(8)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 2.18e4"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(9)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(9)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 8.75e4"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(10)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(10)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 3.5e5"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(11)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(11)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 1.4e6"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(12)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(12)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 5.6e6"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(13)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(13)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 2.2e7"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(14)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(14)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 9e7"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(15)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(15)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 3.6e8"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(16)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(16)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 1.4e9"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(17)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(17)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 5.7e9"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(18)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(18)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 2.9e10"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(19)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(19)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 1.4e11"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(20)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(20)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 7.2e11"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(21)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(21)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 3.6e12"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(22)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(22)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 1.8e13"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(23)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(23)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 9e13"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(24)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(24)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 3.5e14"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(25)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(25)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 4.5e15"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(26)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(26)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 2.2e16"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(27)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(27)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 1.1e17"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(28)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(28)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 5.6e17"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(29)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(29)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 2.8e18"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(30)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(30)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 1.7e19"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(31)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(31)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 1e20"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(32)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(32)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 6.1e20"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(33)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(33)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 3.6e21"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(34)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(34)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 2.2e22"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(35)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(35)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 1.3e23"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(36)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(36)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 7.9e23"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(37)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(37)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 2.3e24"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(38)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(38)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 7.1e24"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(39)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(39)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 2.1e25"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(40)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(40)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 6.4e25"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(41)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(41)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 1.9e26"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(42)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(42)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 5.8e26"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(43)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(43)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 1.7e27"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(44)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(44)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 6.9e27"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(45)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(45)) {
        document.getElementById("Exp").textContent = "Level " + player.Level + " | " + format(player.Expirience) + " / 2.8e28"
        if(player.Expirience.gte(0.2)) {
            player.Level = new Decimal(46)
            player.Expirience = new Decimal(0)
        }
    }
    if(player.Level.eq(46)) {
        document.getElementById("Exp").textContent = "Level Max | " + format(player.Expirience)
    }
}

setInterval(Leveling, 1000/20)