function createItemList(){
  return [
    {
      id: 1,
      pos:[1,2],
      name: "B.F. Sword",
      description: "Gain Attack Damage.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 2,
      pos:[1,3],
      name: "Recurve Bow",
      description: "Gain Attack Speed.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 3,
      pos:[1,4],
      name: "Needlessly Large Rod",
      description: "Gain Spell Power.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 4,
      pos:[1,5],
      name: "Tear of the Goddess",
      description: "Gain Mana.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 5,
      pos:[1,6],
      name: "Chain Vest",
      description: "Gain Armor.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 6,
      pos:[1,7],
      name: "Negatron Cloak",
      description: "Gain Magic Resist.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 7,
      pos:[1,8],
      name: "Giant's Belt",
      description: "Gain Health.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 8,
      pos:[1,10],
      name: "Spatula",
      description: "It must do something...",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 9,
      pos:[1,9],
      name: "Sparring Gloves",
      description: "Gain Critical Strike Chance and Dodge Chance.",
      isUnique: false,
      isShadow: false
    },
    {
      id: 11,
      pos:[2,2],
      name: "Deathblade",
      description:
        "Contributing to a kill grants the holder additional Attack Damage for the rest of combat. This effect can stack any number of times.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 12,
      pos:[2,3],
      name: "Giant Slayer",
      description:
        "The holder's Abilities and attacks do bonus damage. If the target has more health, the bonus damage increases.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 13,
      name: "Hextech Gunblade",
      pos:[2,4],
      description:
        "The holder's magic and true damage from Abilities heal them for a percentage of the damage dealt. Excess healing fuels a shield that protects the holder.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 14,
      name: "Spear of Shojin",
      pos:[2,5],
      description: "The holder's Basic Attacks restore additional Mana. ",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 15,
      pos:[2,6],
      name: "Guardian Angel",
      description:
        "Prevents the holder's first death, placing them in stasis instead. After a short delay, they return with restored Health and shed all negative effects.",
      isUnique: true,
      isShadow: false,
    },
    {
      id: 16,
      pos:[2,7],
      name: "Bloodthirster",
      description:
        "Physical damage heals the holder for a percentage of the damage dealt.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 17,
      pos:[2,8],
      name: "Zeke's Herald",
      description:
        "When combat begins, the holder and all nearby allies in the same row gain Attack Speed for the rest of combat.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 18,
      pos:[2,10],
      name: "Skirmisher Emblem",
      description: "The holder gains the Skirmisher trait.",
      isUnique: true,
      isShadow: false,
    },
    {
      id: 19,
      pos:[2,9],
      name: "Infinity Edge",
      description:
        "Grants Critical Strike Chance (including components). Each point of Critical Strike Chance above 100% becomes bonus Critical Strike Damage.",
      isUnique: true,
      isShadow: false,
    },
    {
      id: 22,
      pos:[3,3],
      name: "Rapid Firecannon",
      description:
        "Increases the holder's Attack Range and grants bonus Attack Speed (including components). The holder's attacks can no longer miss.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 23,
      pos:[3,4],
      name: "Guinsoo's Rageblade",
      description:
        "Attacks grant bonus Attack Speed for the rest of combat. This bonus Attack Speed can stack any number of times.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 24,
      pos:[3,5],
      name: "Statikk Shiv",
      description:
        "Every third attack from the holder unleashes a chain lightning that bounces to nearby enemies, dealing magic damage and reducing their Magic Resist for several seconds.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 25,
      pos:[3,6],
      name: "Titan's Resolve",
      description:
        "When the holder takes damage or inflicts a critical strike, they gain a stacking Attack Damage and Ability Power bonus.  This stacks up to a limit, at which point the holder gains Armor and Magic Resistance.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 26,
      pos:[3,7],
      name: "Runaan's Hurricane",
      description:
        "The holder's attacks fire a bolt at another nearby enemy, dealing a percentage of the holder's Attack Damage and applying on-hit effects. These bolts can critically strike.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 27,
      pos:[3,8],
      name: "Zz'Rot Portal",
      description:
        "At the start of combat, the holder taunts nearby enemies. When the holder dies, a Voidspawn arises taunting nearby enemies. Voidspawns that arise from summoned units are only partially effective.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 28,
      pos:[3,10],
      name: "Legionnaire Emblem",
      description: "The holder gains the Legionnaire trait.",
      isUnique: true,
      isShadow: false,
    },
    {
      id: 29,
      pos:[3,9],
      name: "Last Whisper",
      description:
        "When the holder inflicts a critical hit, the target's Armor is reduced for several seconds. This effect does not stack.",
      isUnique: true,
      isShadow: false,
    },
    {
      id: 33,
      pos:[4,4],
      name: "Rabadon's Deathcap",
      description:
        "Grants a percentage bonus Ability Power (including components).",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 34,
      pos:[4,5],
      name: "Archangel's Staff",
      description:
        "Each time the holder casts their Ability, they gain Ability Power equal to a percentage of their maximum Mana.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 35,
      pos:[4,6],
      name: "Locket of the Iron Solari",
      description:
        "When combat begins, the holder and nearby allies in the same row gain a shield that blocks damage for several seconds.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 36,
      pos:[4,7],
      name: "Ionic Spark",
      description:
        "Nearby enemies have their Magic Resist reduced (does not stack). When they cast a spell, they are zapped taking magic damage equal to a percentage of their max Mana.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 37,
      pos:[4,8],
      name: "Morellonomicon",
      description:
        "When the holder deals magic or true damage with their Ability, they burn the target, dealing a percentage of the target's maximum Health as true damage over several seconds, and reducing healing for the duration of the burn.",
      isUnique: true,
      isShadow: false,
    },
    {
      id: 38,
      pos:[4,10],
      name: "Spellweaver Emblem",
      description: "The holder gains the Spellweaver trait.",
      isUnique: true,
      isShadow: false,
    },
    {
      id: 39,
      pos:[4,9],
      name: "Jeweled Gauntlet",
      description:
        "The holder's magic and true damage from their Ability can critically strike. The holder gains bonus Critical Strike Damage.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 44,
      pos:[5,5],
      name: "Blue Buff",
      description: "After casting their Ability, the holder gains Mana.",
      isUnique: true,
      isShadow: false,
    },
    {
      id: 45,
      pos:[5,6],
      name: "Frozen Heart",
      description: "Reduces the Attack Speed of nearby enemies.",
      isUnique: true,
      isShadow: false,
    },
    {
      id: 46,
      pos:[5,7],
      name: "Chalice of Power",
      description:
        "When combat begins, the holder and all nearby allies in the same row gain Spell Power for the rest of combat.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 47,
      pos:[5,8],
      name: "Redemption",
      description:
        "Periodically, the holder radiates an aura to nearby allies, healing them a percentage of their missing Health. Affected allies take reduced damage from multi-target abilities and attacks for several seconds.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 48,
      pos:[5,10],
      name: "Renewer Emblem",
      description: "The holder gains the Renewer trait.",
      isUnique: true,
      isShadow: false,
    },
    {
      id: 49,
      pos:[5,9],
      name: "Hand Of Justice",
      description:
        "At the beginning of each planning phase, the holder's basic attacks and spells deal additional damage or heal for a percentage of damage dealt.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 55,
      pos:[6,6],
      name: "Bramble Vest",
      description:
        "Negates bonus damage from incoming critical hits. On being hit by a Basic Attack, deal magic damage to all nearby enemies every couple seconds.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 56,
      pos:[6,7],
      name: "Gargoyle Stoneplate",
      description:
        "The holder gains Armor and Magic Resist for each enemy targeting them.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 57,
      pos:[6,8],
      name: "Sunfire Cape",
      description:
        "Periodically, a random nearby enemy is burned a percentage of their maximum Health over several seconds. Any healing they receive is reduced.",
      isUnique: true,
      isShadow: false,
    },
    {
      id: 58,
      pos:[6,10],
      name: "Ironclad Emblem",
      description: "The holder gains the Ironclad trait.",
      isUnique: true,
      isShadow: false,
    },
    {
      id: 59,
      pos:[6,9],
      name: "Shroud of Stillness",
      description:
        "When combat begins, the holder shoots a beam straight ahead that delays affected enemies' first spellcast, increasing their max Mana until they cast.",
      isUnique: true,
      isShadow: false,
    },
    {
      id: 66,
      pos:[7,7],
      name: "Dragon's Claw",
      description: "Grants bonus Magic Resist (including components).",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 67,
      pos:[7,8],
      name: "Zephyr",
      description:
        "When combat begins, the holder summons a whirlwind on the opposite side of the arena that removes the closest enemy from combat for several seconds. Ignores CC immunity.",
      isUnique: true,
      isShadow: false,
    },
    {
      id: 68,
      pos:[7,10],
      name: "Redeemed Emblem",
      description: "The holder gains the Redeemed trait.",
      isUnique: true,
      isShadow: false,
    },
    {
      id: 69,
      pos:[7,9],
      name: "Quicksilver",
      description:
        "The holder is immune to crowd control for the first several seconds of combat.",
      isUnique: true,
      isShadow: false,
    },
    {
      id: 77,
      pos:[8,8],
      name: "Warmog's Armor",
      description: "Grants bonus Health (including components).",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 78,
      pos:[8,10],
      name: "Dawnbringer Emblem",
      description: "The holder gains the Dawnbringer trait.",
      isUnique: true,
      isShadow: false,
    },
    {
      id: 79,
      pos:[8,9],
      name: "Trap Claw",
      description:
        "Blocks the first enemy Ability that hits the holder, and stuns the Ability's caster for several seconds.",
      isUnique: true,
      isShadow: false,
    },
    {
      id: 88,
      pos:[10,10],
      name: "Force of Nature",
      description: "The holder's maximum team size is incrased.",
      isUnique: false,
      isShadow: false,
    },
    {
      id: 89,
      pos:[10,9],
      name: "Assassin Emblem",
      description: "The holder gains the Assassin trait.",
      isUnique: true,
      isShadow: false,
    },
    {
      id: 99,
      pos:[9,9],
      name: "Thief's Gloves",
      description:
        "At the beginning of each planning phase, the holder equips 2 temporary items. Temporary items increase in power based on your player level. [Consumes Three Item Slots. Cannot Grant Shadow Items]",
      isUnique: false,
      isShadow: false,
    }
  ];
}