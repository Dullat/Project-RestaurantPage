let menu = document.createElement('div');

menu.classList.add('home');

menu.innerHTML = `
<div class="card">
    <div class="card-background | spell-1"></div>
    <div class="food-details">
        <p class="title">Healing Elixir of the Blood Moon:</p>
        <p class="discreption">A crimson elixir in a glass bottle under a blood-red moon, heals rapidly but leaves eerie, glowing marks on the skin.</p>
    </div>
</div>

<div class="card">
    <div class="card-background | spell-2"></div>
    <div class="food-details">
        <p class="title">Inferno's Embrace:</p>
        <p class="discreption">An ancient tome ablaze with flames promises to engulf enemies, leaving them scorched and screaming in agony.</p>
    </div>
</div>

<div class="card">
    <div class="card-background | spell-3"></div>
    <div class="food-details">
        <p class="title">Shroud of the Abyss:</p>
        <p class="discreption">A black vial holds swirling darkness granting invisibility, but prolonged use risks losing oneself to the abyss..</p>
    </div>
</div>

<div class="card">
    <div class="card-background | spell-4"></div>
    <div class="food-details">
        <p class="title">Visions of the Mad Seer:</p>
        <p class="discreption">A cracked crystal ball grants glimpses of the future at the cost of sanity, adorned with shifting runes</p>
    </div>
</div>

<div class="card">
    <div class="card-background | spell-5"></div>
    <div class="food-details">
        <p class="title">Screams of the Banshee:</p>
        <p class="discreption">Haunting bottle releases mist echoing with tortured screams, paralyzing enemies with fear before their inevitable demise.</p>
    </div>
</div>
`;

export {menu};