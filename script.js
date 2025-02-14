class CookieClicker {
    constructor() {
        this.cookies = 0;
        this.cookiesPerClick = 1;
        this.upgradeCost = 50;
        this.autoUpgradeCost = 10;
        this.superUpgradeCost = 100;
        this.dansupgradeCost = 300;
        this.cookiesPerSecond = 0;
        this.UpgradeBought = 0;
        this.cookieElement = document.getElementById("cookie");
        this.countElement = document.getElementById("cookie-count");
        this.upgradeButton = document.getElementById("upgrade");
        this.autoUpgradeButton = document.getElementById("auto-upgrade");
        this.superUpgradeButton = document.getElementById("super-upgrade");
        this.dansupgradeButton = document.getElementById("dans-upgrade")
        this.rewardVideo = document.getElementById("reward-video");
        this.dansVideo = document.getElementById("dans-video");
        
        this.cookieElement.addEventListener("click", () => this.clickCookie());
        this.upgradeButton.addEventListener("click", () => this.buyUpgrade());
        this.autoUpgradeButton.addEventListener("click", () => this.buyAutoUpgrade());
        this.superUpgradeButton.addEventListener("click", () => this.buySuperUpgrade());
        this.dansupgradeButton.addEventListener("click", () => this.buydansupgrade())
       
        var tempcookie = localStorage.getItem("cookies");
        if(tempcookie == "undefind"){
        localStorage.setItem("cookies", this.cookies)
        }
        else{
            this.cookies = Number(tempcookie)
        }
        console.log(this.cookies);
        setInterval(() => this.generateAutoCookies(), 1000);
    }
    clickCookie() {
        this.cookies += this.cookiesPerClick;
        this.updateUI();
    }
    buyUpgrade() {
        if (this.cookies >= this.upgradeCost) {
            this.cookies -= this.upgradeCost;
            this.cookiesPerClick += 1;
            this.upgradeCost = Math.floor(this.upgradeCost * 1.5);
            this.upgradeButton.textContent = `Upgrade (+1 per click) [Cost: ${this.upgradeCost}]`;
            this.updateUI();
        }
    }
    buyAutoUpgrade() {
        if (this.cookies >= this.autoUpgradeCost) {
            this.cookies -= this.autoUpgradeCost;
            this.cookiesPerSecond += 0.5;
            this.autoUpgradeCost = Math.floor(this.autoUpgradeCost * 1.2);
            this.autoUpgradeButton.textContent = `Rob Penders geeft training (+0.5/sec) [Cost: ${this.autoUpgradeCost}]`;
            this.updateUI();
        }
    }
    buySuperUpgrade() {
        if (this.cookies >= this.superUpgradeCost) {
            this.cookies -= this.superUpgradeCost;
            this.cookiesPerSecond += 1;
            this.UpgradeBought += 1;
            this.superUpgradeCost = Math.floor(this.superUpgradeCost * 1.15);
            this.superUpgradeButton.textContent = `Super Auto Cookie (+1/sec) [Cost: ${this.superUpgradeCost}]`;
            this.rewardVideo.style.display = "block";
            this.rewardVideo.play();
            this.updateUI();
        }
        if(this.UpgradeBought = 1){
            document.getElementById("super-upgrade").remove();
        }
    }
    buydansupgrade(){
    if(this.cookies >= this.dansupgradeCost){
        this.cookies -= this.dansupgradeCost;
        this.cookiesPerSecond += 8;
        this.UpgradeBought += 1;
        this.dansupgradeCost = Math.floor(this.dansupgradeCost * 1.15)
        this.dansupgradeButton.textContent = `Super Auto Cookie (+1/sec) [Cost: ${this.dansupgradeCost}]`;
        // de video aan kondigen andere id en video er in zetten
        this.dansVideo.style.display = "block";
        this.dansVideo.play();
        this.updateUI();
      }
      if(this.UpgradeBought <= 1 ){
        document.getElementById("dans-upgrade").style.visibility = "hidden";
    }
      if(this.UpgradeBought = 2){
        document.getElementById("dans-upgrade").remove();
      }
    }
    generateAutoCookies() {
        this.cookies += this.cookiesPerSecond;
        this.updateUI();
    }
    updateUI() {
        this.countElement.textContent = this.cookies;
        localStorage.setItem("cookies", this.cookies)
    }
}
new CookieClicker();