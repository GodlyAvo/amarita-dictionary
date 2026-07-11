// CENTRALIZED DICTIONARY DATA
        const dictionaryData = [
            {
                term: "Hocicon",
                literal: "Big snout.",
                meaning: "Loudmouth, trash talker, or someone who talks a massive amount of shit but cannot back it up.",
                context: "When someone is talking shit in proximity chat and you kill them.",
                quote: "Tan hocicon y no la armas, a chingar a su madre pa la lobby.",
                audio: "audio/hocicon.m4a"
            },
            {
                term: "Mamón",
                literal: "Sucker.",
                meaning: "Arrogant, insufferable, a jerk, or someone who is trying way too hard.",
                context: "Perfect for when the lobby is ridiculously sweaty. If a mf is slide canceling 40 times, YY'n like crazy, and doing crazy movement just to get a basic kill, they are being a mamón.",
                quote: "Ay, qué mamón eres.",
                audio: "audio/mamon.m4a"
            },
            {
                term: "Puñetas",
                literal: "Wanks.",
                meaning: "A complete idiot, a wanker, or someone who is absolutely useless. Describes someone making phenomenally stupid decisions.",
                context: "You see/watch someone do something really stupid and dumb.",
                quote: "Estas bien puñetas wey.",
                audio: "audio/punetas.m4a"
            },
            {
                term: "Me la pelas",
                literal: "You peel it for me (a banana).",
                meaning: "\"You can't touch me,\" \"You are nothing compared to me,\" or \"I am better than you.\"",
                context: "When a tryhard mf tries to ego chall u but you completely outgun him and leave him crawling on the floor.",
                quote: "Me la pelaste wey.",
                audio: "audio/melapelas.m4a"
            },
            {
                term: "Chamaco Miado",
                literal: "Piss covered kid.",
                meaning: "A deeply disrespectful and dismissive way to call someone a brat, a \"squeaker,\" or an immature child who hasn't earned the right to talk trash.",
                context: "When a little kid or a grown ass man with childish behavior starts screaming every profanity they know.",
                quote: "Ya cállese, pinche chamaco miado.",
                audio: "audio/chamaco.m4a"
            },
            {
                term: "Hambreado",
                literal: "Starving or famished.",
                meaning: "Extremely thirsty for a kill/playing utterly desperately.",
                context: "Use this when an enemy player chases you across the entire map, ignoring other teams and the gas, just to get one single kill.",
                quote: "No seas tan hambreado wey.",
                audio: "audio/hambreado.m4a"
            },
            {
                term: "Llorón",
                literal: "Crier.",
                meaning: "Crybaby or complainer.",
                context: "When you kill someone and immediately hear them screaming in death comms about aim assist, lag, or accusing her of hacking because their ego is bruised.",
                quote: "No seas llorón.",
                audio: "audio/lloron.m4a"
            },
            {
                term: "Espantaviejas",
                literal: "Woman scarer.",
                meaning: "A guy whose behavior/personality repels women. Tryhards, incels, and random dudes who talk unprovoked trash the second they hear a girl in game chat.",
                context: "If a random guy hears your voice in proximity chat and instantly starts making kitchen jokes or acting weird.",
                quote: "Mi compa el espantaviejas.",
                audio: "audio/espantaviejas.m4a"
            },
            {
                term: "Culón",
                literal: "Someone with a big ass.",
                meaning: "A massive coward or a pussy. Someone who talks a big game but completely backs down when the actual fight starts.",
                context: "Lets say an enemy shoots you from the back, you turn around and break him, then he starts running.",
                quote: "Pa que corres, no seas culon.",
                audio: "audio/culon.m4a"
            },
            {
                term: "Agüitado",
                literal: "To get watery.",
                meaning: "Feeling down, completely defeated, bummed out, or losing your motivation after something bad happens.",
                context: "When you lose a 1v1 you know you should have won, or a teammate immediately gets fully killed off the drop and chat can tell the vibes are down.",
                quote: "Ando bien agüitada. OR No te agüites, wey.",
                audio: "audio/aguitado.m4a"
            },
            {
                term: "Curada",
                literal: "Cured.",
                meaning: "Cool, funny, or awesome.",
                context: "Lets say you watch a crazy clip or someone in chat says something genuinely funny.",
                quote: "Qué curada está ese clip.",
                audio: "audio/curada.m4a"
            },
            {
                term: "Arre",
                literal: "Giddy-up.",
                meaning: "Say less, bet, I'm down.",
                context: "Someone in chat ask you if you want a chall or to run a specific loadout.",
                quote: "Arre arre, ¿cual?.",
                audio: "audio/arre.m4a"
            },
           {
                term: "Cámara",
                literal: "Camera (slang: agreement).",
                meaning: "Alright, got it, or sure.",
                context: "Use this to confirm you understand a play or to agree to a plan.",
                quote: "—¿Compramos loady? —¡Cámara!",
                audio: "audio/camara.m4a"
            },
            {
                term: "Chingón",
                literal: "Badass / Cool.",
                meaning: "Awesome, cool, or badass. Describes something or someone of high quality.",
                context: "Use this when someone hits an insane snipe or makes a goated play.",
                quote: "¡Pinche tiro tan chingón te aventaste!",
                audio: "audio/chingon.m4a"
            },
            {
                term: "Ni modo",
                literal: "No way / No method.",
                meaning: "Oh well, whatever, or it is what it is.",
                context: "Used when something bad happens that you cannot change, like getting eliminated in a stupid way.",
                quote: "Nos mataron we... ni modo.",
                audio: "audio/nimodo.m4a"
            },
            {
                term: "Qué onda",
                literal: "What wave.",
                meaning: "What's up? or What's going on?",
                context: "A standard, casual way to greet the chat or ask what a teammate is doing.",
                quote: "¿Qué onda contigo Amara?",
                audio: "audio/queonda.m4a"
            },
            {
                term: "No mames",
                literal: "Don't suck.",
                meaning: "No way, You're kidding, That's crazy",
                context: "Used when something shocking happens, whether it's a crazy play or a total disaster.",
                quote: "¡No mames, como me mata ese pinche bot!",
                audio: "audio/nomames.m4a"
            },
            {
                term: "Wey",
                literal: "Ox (slang: dude).",
                meaning: "Bro / Man.",
                context: "The most common way to address a friend or acquaintance in Mexico.",
                quote: "¿Qué haces, wey?",
                audio: "audio/wey.m4a"
            },
            {
                term: "Codo",
                literal: "Elbow.",
                meaning: "Cheap / Stingy.",
                context: "Used for someone who never wants to buy stuff or share their loot in game.",
                quote: "No seas codo, suelta el dinero.",
                audio: "audio/codo.m4a"
            },
            {
                term: "Fresa",
                literal: "Strawberry.",
                meaning: "Preppy / Stuck up / Privileged.",
                context: "Used for someone who acts posh or overly delicate.",
                quote: "No seas fresa wey.",
                audio: "audio/fresa.m4a"
            },
            {
                term: "Vale madre",
                literal: "It is worth a mother.",
                meaning: "It doesn't matter / It's worthless / Who cares.",
                context: "Used when something goes wrong and you've given up on trying to fix it.",
                quote: "Ya valió madre esta partida.",
                audio: "audio/valemadre.m4a"
            },
            {
                term: "A toda madre",
                literal: "At all mother.",
                meaning: "Really cool / Awesome / Excellent.",
                context: "Describes a situation, object, or person that is absolutely top tier.",
                quote: "Tu skin está a toda madre.",
                audio: "audio/atodamadre.m4a"
            },
            {
                term: "Chamba",
                literal: "Job / Work.",
                meaning: "The grind, a task, or carrying the team's workload.",
                context: "Use this when you are focused on ranking up, farming loot, or doing the heavy lifting in a match.",
                quote: "Me toca hacer toda la chamba en este pinche equipo.",
                audio: "audio/chamba.m4a"
            },
            {
                term: "Gacho",
                literal: "Ugly / Bad.",
                meaning: "Bad, mean, or unpleasant.",
                context: "Use this to describe an unfair situation, a mean action, or something that looks very bad.",
                quote: "Nombre se portaron bien gacho conmigo.",
                audio: "audio/gacho.m4a"
            },
            {
                term: "Neta",
                literal: "Truth.",
                meaning: "The truth / Seriously / For real.",
                context: "Used to confirm if something is true or to emphasize that you are being serious.",
                quote: "¿Es neta?",
                audio: "audio/neta.m4a"
            },
            {
                term: "Desmadre",
                literal: "Unmothered (slang: chaos).",
                meaning: "Chaos, mess, or a wild party.",
                context: "Describes a situation that has gone completely out of control or a place that is extremely messy.",
                quote: "Habia un desmadre en control.",
                audio: "audio/desmadre.m4a"
            },
            {
                term: "Chido",
                literal: "Cool / Nice.",
                meaning: "Cool, nice, or awesome.",
                context: "A classic, universally used Mexican word to say something is good or liked.",
                quote: "Tu arma está bien chida.",
                audio: "audio/chido.m4a"
            },
            {
                term: "Metiche",
                literal: "Meddlesome.",
                meaning: "Busybody / Nosy person.",
                context: "Perfect for someone who keeps interfering in things that don't concern them.",
                quote: "No seas metiche.",
                audio: "audio/metiche.m4a"
            },
            {
                term: "Maleta",
                literal: "Suitcase.",
                meaning: "Bad at the game / Skill less.",
                context: "Used to call out someone who is playing terribly or is just not good at the game.",
                quote: "Estás bien maleta wey, mejor desinstala esta madre.",
                audio: "audio/maleta.m4a"
            },
            {
                term: "Tirar paro",
                literal: "To throw a stop (slang: to help).",
                meaning: "To do a favor or to help someone out.",
                context: "Use this when you need a teammate to revive you, drop ammo, or help you out of a tough spot.",
                quote: "Tirame paro con una placa, wey.",
                audio: "audio/tirarrparo.m4a"
            },
            {
                term: "Cagarla",
                literal: "To shit it.",
                meaning: "To mess up / To screw up royally.",
                context: "Perfect for when you make a massive mistake, like missing an easy shot or accidentally blowing yourself up.",
                quote: "La cagué, me morí a lo pendejo.",
                audio: "audio/cagarla.m4a"
            },
            {
                term: "A huevo",
                literal: "By egg (slang: hell yeah).",
                meaning: "Hell yeah / For sure / Definitely",
                context: "Used to show extreme excitement or to emphasize that you agree with something 100%.",
                quote: "¡A huevoooo, ganamos la partida!",
                audio: "audio/ahuevo.m4a"
            },
            {
                term: "Plebe / Plebes",
                literal: "Child / Children (Sinaloan slang).",
                meaning: "Kid(s), friend(s), or homie(s).",
                context: "Commonly used in Northern Mexico to refer to your squad, teammates, or just people you are playing with.",
                quote: "¡Qué rolo, plebes!",
                audio: "audio/plebe.m4a"
            },
            {
                term: "Fierro",
                literal: "Iron / Tool.",
                meaning: "Let's go / Bet / Done deal / Power.",
                context: "Used to show enthusiasm, agree to a plan, or hype up the squad before an aggressive push.",
                quote: "¡Fierro fierro, hay que ganar!",
                audio: "audio/fierro.m4a"
            },
            {
                term: "Ingasumadre",
                literal: "Euphemism for a curse.",
                meaning: "Holy shit / Damn",
                context: "An intense, rapid exclamation used when something sudden and shocking happens in game, like a jumpscare or a sudden death.",
                quote: "¡Ingasumadre! De dónde me mato???",
                audio: "audio/insatumadre.m4a"
            },
            {
                term: "Pinche",
                literal: "Kitchen assistant (slang: damn/fucking).",
                meaning: "Damn / Fucking.",
                context: "Used as an intensifier for almost any noun to express annoyance, anger, or emphasis.",
                quote: "¡Pinche juego, está lleno de pinches bugs!",
                audio: "audio/pinche.m4a"
            },
            {
                term: "En corto",
                literal: "In short.",
                meaning: "Right away / Quickly / Immediately.",
                context: "Use this when you need something done immediately or you are going to execute a play without hesitation.",
                quote: "Revíveme en corto, wey.",
                audio: "audio/encorto.m4a"
            },
            {
                term: "En caliente",
                literal: "In hot.",
                meaning: "Right now / Fast / Without delay.",
                context: "Similar to 'en corto', but emphasizes doing something at maximum speed or intensity.",
                quote: "Cáele en caliente a la tienda.",
                audio: "audio/encaliente.m4a"
            },
            {
                term: "Culero",
                literal: "Ass related.",
                meaning: "Asshole / Jerk / Cowardly.",
                context: "A harsh way to describe someone who is acting mean, cheating, or intentionally ruining the fun.",
                quote: "No seas culero y suéltame la feria.",
                audio: "audio/culero.m4a"
            },
            {
                term: "Feria",
                literal: "Fair / Carnival.",
                meaning: "Money / Cash.",
                context: "Used frequently when talking about the cost of things, loot, or needing cash in game.",
                quote: "Ya conseguí la feria para la loady.",
                audio: "audio/feria.m4a"
            },
            {
                term: "Lana",
                literal: "Wool.",
                meaning: "Money / Cash.",
                context: "Another very common and casual way to refer to money, very similar to 'feria'.",
                quote: "No tengo nada de lana ahorita, wey.",
                audio: "audio/lana.m4a"
            },
            {
                term: "Naco",
                literal: "Questionable taste.",
                meaning: "Tacky, cringey, or someone with poor fashion/aesthetic choices.",
                context: "Used to describe someone who has poor taste, behaves in a 'cringe' way, or looks cheap.",
                quote: "Qué naco te ves con esa skin.",
                audio: "audio/naco.m4a"
            },
            {
                term: "Cáele",
                literal: "Fall (slang: come over).",
                meaning: "Come over / Show up / Drop by.",
                context: "Used to invite someone to join your party, your squad, or just to get into the lobby.",
                quote: "Cáele a jugar, wey",
                audio: "audio/caele.m4a"
            },
            {
                term: "Chafa",
                literal: "Low quality / Fake.",
                meaning: "Cheap, low quality, or fake.",
                context: "Perfect for calling out hardware, a cheap play, or a skin that looks like a knock off.",
                quote: "Ese micro se escucha bien chafa, wey.",
                audio: "audio/chafa.m4a"
            },
            {
                term: "Tirar hueva",
                literal: "Throw laziness.",
                meaning: "To be lazy / To do nothing / Chill.",
                context: "Use this when you are just hanging out, not playing seriously, or just relaxing on stream.",
                quote: "Hoy no quiero hacer nada, nomas tirar hueva.",
                audio: "audio/tirarhueva.m4a"
            },
            {
                term: "Rífate",
                literal: "Raffle yourself.",
                meaning: "Step up / Show off your skills.",
                context: "A way to hype someone up to make an insane play or to handle a difficult situation.",
                quote: "¡Rífate ese 1v4 Amara!",
                audio: "audio/rifate.m4a"
            },
            {
                term: "Al tiro",
                literal: "At the shot.",
                meaning: "On point / Ready / Attentive.",
                context: "Used to say you are focused or that someone needs to be alert to avoid getting caught off guard.",
                quote: "Ponte al tiro, ahi vienen wey.",
                audio: "audio/altiro.m4a"
            },
            {
                term: "Cansado",
                literal: "Tired.",
                meaning: "Fed up / Done with it.",
                context: "Not just sleepy; use this when you are genuinely exhausted by the game's state, bugs, or bad teammates.",
                quote: "Ya estoy cansado de este pinche juego, la neta.",
                audio: "audio/cansado.m4a"
            },
            {
                term: "Vato",
                literal: "Guy / Dude.",
                meaning: "Guy, man, or dude.",
                context: "A common, casual term for any guy. It’s often used to identify someone or just refer to a friend in the group.",
                quote: "Ese vato juega bien, invítalo al equipo.",
                audio: "audio/vato.m4a"
            },
            {
                term: "A todo dar",
                literal: "At all give.",
                meaning: "Very good / Awesome / Friendly.",
                context: "Used to describe someone who is super cool, nice, or a situation that went perfectly.",
                quote: "Ese vato es a todo dar, deja lo agrego.",
                audio: "audio/atododar.m4a"
            },
            {
                term: "Echarle ganas",
                literal: "To throw effort.",
                meaning: "To give it your all / To try hard.",
                context: "The universal phrase for when you need to focus and put in the effort to win or complete a task.",
                quote: "¡Échenle ganas, ya casi ganamos plebes!",
                audio: "audio/echarleganas.m4a"
            },
            {
                term: "Maso",
                literal: "Short for 'más o menos'.",
                meaning: "So so / Okay / Average.",
                context: "Use this when someone asks how your game or your day is going and it’s just 'fine'.",
                quote: "¿Cómo van las partidas Amara? — Ahí, maso.",
                audio: "audio/maso.m4a"
            },
            {
                term: "Cagado",
                literal: "Shitted.",
                meaning: "Funny / Hilarious.",
                context: "Used when someone does or says something extremely funny. Not to be confused with 'cagarla' (to mess up).",
                quote: "Está bien cagado ese clip, wey.",
                audio: "audio/cagado.m4a"
            },
            {
                term: "Ahorita",
                literal: "Little now.",
                meaning: "In a little while / Later / Maybe never.",
                context: "The legendary Mexican term for 'soon,' which could mean five minutes or five hours.",
                quote: "Ahorita te revivo, espérame.",
                audio: "audio/ahorita.m4a"
            },
            {
                term: "Baboso",
                literal: "Drooling.",
                meaning: "Dumbass / Moron.",
                context: "A lighter, slightly more 'playful' insult than 'pendejo' when someone makes a silly mistake.",
                quote: "No seas baboso, ¿cómo te vas a morir así wey?",
                audio: "audio/baboso.m4a"
            },
            {
                term: "Ojete",
                literal: "Asshole (anatomy).",
                meaning: "Mean person / Asshole / Unfair.",
                context: "Used for someone acting particularly malicious or being a 'jerk' in the game.",
                quote: "No seas ojete, revíveme.",
                audio: "audio/ojete.m4a"
            },
            {
                term: "Me vale madre",
                literal: "It's worth a mother to me.",
                meaning: "I don't give a fuck.",
                context: "The ultimate expression of indifference. Use this when you are completely fed up with the game or someone's drama.",
                quote: "La neta, me vale madre si perdemos, nomas quiero jugar.",
                audio: "audio/mevalemadre.m4a"
            },
            {
                term: "No te hagas",
                literal: "Don't make yourself.",
                meaning: "Don't pretend / Don't play dumb.",
                context: "When someone acts like they don't know why they messed up, but you both know they did.",
                quote: "No te hagas, si tenias dinero wey",
                audio: "audio/notehagas.m4a"
            },
            {
                term: "Paniquearse",
                literal: "To panic.",
                meaning: "To freak out / To panic under pressure.",
                context: "Perfect for when a teammate gets into a 1v4 and completely loses their cool.",
                quote: "No te paniquees, nomas dispara.",
                audio: "audio/paniquearse.m4a"
            },
            {
                term: "A pata",
                literal: "On foot.",
                meaning: "Walking / On foot.",
                context: "Used when you don't have a vehicle, or in gaming, when you're caught outside the zone without a car.",
                quote: "Nos toca irnos a pata hasta la zona.",
                audio: "audio/apata.m4a"
            },
            {
                term: "No manches",
                literal: "Don't stain.",
                meaning: "No way! / You're kidding! / Come on!",
                context: "The universal expression for disbelief, frustration, or surprise. An absolute staple.",
                quote: "No manches, ¿cómo me mató ese campero?",
                audio: "audio/nomanches.m4a"
            },
            {
                term: "Rarito",
                literal: "A little weird.",
                meaning: "Strange / Sketchy / Off.",
                context: "Use this when someone is acting suspicious, playing in an odd way, or if a situation feels 'off'.",
                quote: "Ese vato se mueve bien rarito, ¿Esta hackeando?",
                audio: "audio/rarito.m4a"
            },
            {
                term: "Emperrarse",
                literal: "To get like a dog.",
                meaning: "To get super angry / To lose one's temper.",
                context: "When someone is genuinely furious, usually because they died in a really stupid way.",
                quote: "Me emperré machin esa partida.",
                audio: "audio/emperrarse.m4a"
            },
            {
                term: "Chingadera",
                literal: "Fucking thing.",
                meaning: "Thing / Doohickey / Piece of junk.",
                context: "A universal word for any object, especially if it's broken, confusing, or just annoying to deal with.",
                quote: "¡Ya no sirve esta chingadera de monitor!",
                audio: "audio/chingadera.m4a"
            },
            {
                term: "Aguas",
                literal: "Waters.",
                meaning: "Watch out! / Careful!",
                context: "The go to warning when you see an enemy, hear footsteps, or notice a trap. Use it to keep your team from getting caught off guard.",
                quote: "¡Aguas, wey! Estan campeando ahi adentro.",
                audio: "audio/aguas.m4a"
            },
            {
                term: "Amontonados",
                literal: "Piled up.",
                meaning: "Stacked / Grouped up.",
                context: "The ultimate callout for when the enemy team is bunched together.",
                quote: "¡Están todos amontonados en esa casa, aguas!",
                audio: "audio/amontonados.m4a"
            },
            {
                term: "Apendejarse",
                literal: "To become stupid.",
                meaning: "To space out / To lose focus / To get distracted.",
                context: "When you die because you weren't paying attention or you made a brain dead move.",
                quote: "La neta me apendejé y me mataron.",
                audio: "audio/apendejarse.m4a"
            },
            {
                term: "Rolón",
                literal: "Big song.",
                meaning: "LIL BANGER LIL BANGER / Great song.",
                context: "Perfect for when you're playing music on stream or in the lobby and a really good track comes on.",
                quote: "Roloooon!",
                audio: "audio/rolon.m4a"
            },
            {
                term: "Echarse una mano",
                literal: "To throw a hand.",
                meaning: "To help out / To assist.",
                context: "The friendly way to ask for backup in a fight or for any help in general.",
                quote: "Amara, échame una mano con estos sin chambas.",
                audio: "audio/echarsemano.m4a"
            },
            {
                term: "Sin chamba",
                literal: "Without a job.",
                meaning: "No lifer / Tryhard / Sweat.",
                context: "Used to call out an enemy who is playing like their life depends on it, camping hard, or using the most broken 'meta' setup.",
                quote: "Pinches sin chamba.",
                audio: "audio/sinchamba.m4a"
            },
            {
                term: "Pégate un baño",
                literal: "Go take a bath.",
                meaning: "Touch grass / Get a life / You smell.",
                context: "The ultimate insult for a sweaty player who is annoying you. It implies they've been sitting in their chair for so long they probably smell.",
                quote: "Relájate y pégate un baño, nomas son pubs",
                audio: "audio/pegateunbano.m4a"
            },
            {
                term: "Ira",
                literal: "Short for 'mira' (look).",
                meaning: "Look / Check this out.",
                context: "A super quick, regional way to get someone's attention to look at an enemy or an item on screen.",
                quote: "Ira, ahí hay uno campeando en la ventana.",
                audio: "audio/ira.m4a"
            },
            {
                term: "A la verga (Alv)",
                literal: "To the...",
                meaning: "Holy shit / Damn / Fuck off / Screw it.",
                context: "The universal Swiss Army knife of Mexican slang. Can express intense surprise, anger, or total dismissal. [WARNING: EXPLICIT]",
                quote: "¡ALV! ¿Viste ese snipe?",
                audio: "audio/alv.m4a"
            },
            {
                term: "Ira nomás",
                literal: "Look only.",
                meaning: "Just look at that / Check it out.",
                context: "Used to express disbelief or amazement at something, whether it's an incredible play or an absolutely ridiculous fail.",
                quote: "Ira nomás el tiro que se aventó, alv",
                audio: "audio/iranomas.m4a"
            }
        ];