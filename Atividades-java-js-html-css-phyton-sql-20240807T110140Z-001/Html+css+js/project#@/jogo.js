
// Game variables
var altura = 0
var largura = 0
var vidas = 1
var tempo = 60 // Increased time for more gameplay
var score = 0
var isDayTime = true
var currentBiome = 'forest'
var dayNightCycle = 20 // seconds per cycle

// Inventory
var inventory = {
    dirt: 0,
    stone: 0,
    wood: 0,
    diamond: 0,
    gold: 0
}

// Mob and resource spawn rates
var spawnRate = 1500
var mobSpawnRate = 5000 // Mobs spawn less frequently

// Difficulty settings
var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal') {
    spawnRate = 1500
    mobSpawnRate = 5000
} else if(nivel === 'dificil') {
    spawnRate = 1000
    mobSpawnRate = 3000
} else if (nivel === 'chucknorris') {
    spawnRate = 750
    mobSpawnRate = 2000
}

// Resources and mobs
var resources = ['dirt', 'stone', 'wood', 'diamond', 'gold']
var resourceValues = {
    dirt: 1,
    stone: 2,
    wood: 3,
    diamond: 10,
    gold: 5
}

var mobs = ['creeper', 'zombie']

// Biomes
var biomes = ['forest', 'desert', 'snow', 'cave']

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

// Initialize game
function initGame() {
    // Set up day/night cycle
    setInterval(toggleDayNight, dayNightCycle * 1000)
    
    // Change biome every 30 seconds
    setInterval(changeBiome, 30000)
    
    // Update UI
    updateInventoryUI()
    updateScoreUI()
    
    // Start spawning resources
    var spawnResources = setInterval(function() { 
        spawnRandomResource()
    }, spawnRate)
    
    // Start spawning mobs
    var spawnMobs = setInterval(function() { 
        spawnRandomMob()
    }, mobSpawnRate)
}

// Timer countdown
var cronometro = setInterval(function() {
    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

// Toggle day/night
function toggleDayNight() {
    isDayTime = !isDayTime
    
    if(isDayTime) {
        document.body.classList.remove('night')
        document.body.classList.add('day')
    } else {
        document.body.classList.remove('day')
        document.body.classList.add('night')
    }
}

// Change biome
function changeBiome() {
    var randomBiome = biomes[Math.floor(Math.random() * biomes.length)]
    currentBiome = randomBiome
    
    // Remove all biome classes
    document.body.classList.remove('forest', 'desert', 'snow', 'cave')
    
    // Add new biome class
    document.body.classList.add(currentBiome)
}

// Spawn a random resource
function spawnRandomResource() {
    // Random resource type
    var resourceType = resources[Math.floor(Math.random() * resources.length)]
    
    // Random position
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    // Create resource element (using div instead of img for now)
    var resource = document.createElement('div')
    resource.className = tamanhoAleatorio() + ' resource'
    resource.style.left = posicaoX + 'px'
    resource.style.top = posicaoY + 'px'
    resource.style.position = 'absolute'
    resource.id = 'resource_' + Date.now()
    resource.dataset.type = resourceType
    
    // Set background color based on resource type
    switch(resourceType) {
        case 'dirt':
            resource.style.backgroundColor = '#8B4513'
            resource.innerText = 'Dirt'
            break
        case 'stone':
            resource.style.backgroundColor = '#808080'
            resource.innerText = 'Stone'
            break
        case 'wood':
            resource.style.backgroundColor = '#A0522D'
            resource.innerText = 'Wood'
            break
        case 'diamond':
            resource.style.backgroundColor = '#1E90FF'
            resource.innerText = 'Diamond'
            break
        case 'gold':
            resource.style.backgroundColor = '#FFD700'
            resource.innerText = 'Gold'
            break
    }
    
    // Add border and text styling
    resource.style.border = '2px solid black'
    resource.style.borderRadius = '5px'
    resource.style.textAlign = 'center'
    resource.style.color = 'white'
    resource.style.fontWeight = 'bold'
    resource.style.display = 'flex'
    resource.style.alignItems = 'center'
    resource.style.justifyContent = 'center'
    
    // Click handler to collect resource
    resource.onclick = function() {
        collectResource(resourceType)
        this.remove()
    }

    document.body.appendChild(resource)
    
    // Auto-remove resource after 2 seconds if not clicked
    setTimeout(function() {
        if(document.getElementById(resource.id)) {
            document.getElementById(resource.id).remove()
        }
    }, 2000)
}

// Spawn a random mob
function spawnRandomMob() {
    // Random mob type
    var mobType = mobs[Math.floor(Math.random() * mobs.length)]
    
    // Random position
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    // Create mob element (using div instead of img for now)
    var mob = document.createElement('div')
    mob.className = tamanhoAleatorio() + ' ' + ladoAleatorio() + ' mob'
    mob.style.left = posicaoX + 'px'
    mob.style.top = posicaoY + 'px'
    mob.style.position = 'absolute'
    mob.id = 'mob_' + Date.now()
    
    // Set background color based on mob type
    switch(mobType) {
        case 'creeper':
            mob.style.backgroundColor = '#50C878'
            mob.innerText = 'Creeper'
            break
        case 'zombie':
            mob.style.backgroundColor = '#006400'
            mob.innerText = 'Zombie'
            break
    }
    
    // Add border and text styling
    mob.style.border = '2px solid black'
    mob.style.borderRadius = '5px'
    mob.style.textAlign = 'center'
    mob.style.color = 'white'
    mob.style.fontWeight = 'bold'
    mob.style.display = 'flex'
    mob.style.alignItems = 'center'
    mob.style.justifyContent = 'center'
    
    // Click handler to defeat mob
    mob.onclick = function() {
        this.remove()
        score += 5 // Bonus points for defeating mobs
        updateScoreUI()
    }

    document.body.appendChild(mob)
    
    // Auto-remove mob after 3 seconds if not clicked
    // If not clicked, player loses a life
    setTimeout(function() {
        if(document.getElementById(mob.id)) {
            document.getElementById(mob.id).remove()
            
            if(vidas > 3) {
                // Save score to localStorage
                localStorage.setItem('minecraft_score', score.toString())
                window.location.href = 'fim_de_jogo.html'
            } else {
                document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
                vidas++
            }
        }
    }, 3000)
}

// Collect resource and add to inventory
function collectResource(type) {
    inventory[type]++
    score += resourceValues[type]
    updateInventoryUI()
    updateScoreUI()
}

// Update inventory display
function updateInventoryUI() {
    var inventoryElement = document.getElementById('inventory')
    if(inventoryElement) {
        inventoryElement.innerHTML = `
            <div>Dirt: ${inventory.dirt}</div>
            <div>Stone: ${inventory.stone}</div>
            <div>Wood: ${inventory.wood}</div>
            <div>Gold: ${inventory.gold}</div>
            <div>Diamond: ${inventory.diamond}</div>
        `
    }
}

// Update score display
function updateScoreUI() {
    var scoreElement = document.getElementById('score')
    if(scoreElement) {
        scoreElement.innerHTML = score
    }
}

// Crafting function
function craft(item) {
    switch(item) {
        case 'pickaxe':
            if(inventory.wood >= 3 && inventory.stone >= 2) {
                inventory.wood -= 3
                inventory.stone -= 2
                alert('You crafted a pickaxe! Mining speed increased!')
                spawnRate = Math.max(spawnRate - 200, 300) // Increase spawn rate
                updateInventoryUI()
            } else {
                alert('Not enough resources! Need 3 wood and 2 stone.')
            }
            break;
            
        case 'sword':
            if(inventory.wood >= 1 && inventory.stone >= 2) {
                inventory.wood -= 1
                inventory.stone -= 2
                alert('You crafted a sword! Mob defeat bonus increased!')
                score += 20 // Bonus for crafting a sword
                updateScoreUI()
                updateInventoryUI()
            } else {
                alert('Not enough resources! Need 1 wood and 2 stone.')
            }
            break;
    }
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) {
        case 0:
            return 'size1'
        case 1:
            return 'size2'
        case 2:
            return 'size3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

// Initialize game when page loads
window.onload = initGame