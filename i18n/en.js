window.I18N = window.I18N || {};
window.I18N.en = {
  ui: {
    htmlLang: 'en',
    docTitle: 'Solomon // How Solomon Are You? — Archive Sketchbook',
    metaDesc: 'Two sketchbook-style quizzes: "How Solomon are you?" and "Common ground with Tigran [ENTP]".',
    navAbout: 'about', navRules: 'rules', navEntp: 'entp file', navReset: 'start over',
    drawerDefault: 'ARCHIVE NOTE', drawerClose: 'close [×]',
    tab1: '01. How Solomon are you?', tab2: '02. Common ground with Tigran',
    entpBadge: '◈ Subject profile: ENTP · Debater, strategist and collector of paradoxes',
    quizFootnote: '*pick the one option closest to your actual habit',
    prev: '← Back', next: 'Next →', finish: 'Stamp it →',
    sheet: 'SHEET', sheetEntp: 'ENTP · SHEET', calib: 'CALIBRATION',
    copy: 'Copy result', restart: 'Retake',
    copied: 'Copied to clipboard ✓', copyFail: 'Could not copy — select the text manually',
    artAlt: 'Ink portrait in sketchbook style', artCapSolomon: 'SOLOMON · ink study', artCapTigran: 'TIGRAN · ENTP',
    aNav: 'Archive navigation', aTabs: 'Choose a test', aLang: 'Language', aPercent: 'Match percentage'
  },
  drawers: {
    about: {
      title: 'ABOUT // TWO SKETCHBOOK MODES',
      body: 'This sketchbook holds two independent quizzes. The first ("How Solomon are you?") checks how close you are to an ironic, archival archetype. The second ("Common ground with Tigran") rates how well you would get along in conversation, humor and shared projects.'
    },
    rules: {
      title: 'CALIBRATION RULES',
      body: 'Switch between the tabs on the notebook spine at any time. Each quiz has 8 sheets: answer the way you really act, not the way that sounds "right".'
    },
    entp: {
      title: 'TIGRAN FILE // ENTP PROFILE',
      body: 'ENTP ("The Debater"): explosive idea generation, a love of paradox, history and intellectual sparring, combined with respect for clear structure, procedures at work and dry humor without pathos.'
    }
  },
  tests: {
    solomon: {
      signature: 'Solomon',
      role: 'Archivist & Observer',
      title: 'How<br /><span class="handwritten-word">Solomon</span> are you?',
      caption: 'Issue No. 042 · Red ink & graph paper',
      footnote: '*scored on 8 archive criteria: personality, level of dry sarcasm and a pull toward vintage details',
      description: 'This sketchbook records the reactions by which the archive recognizes its own. Answer 8 questions without taking yourself too seriously, and the system will stamp your exact match percentage in ink.',
      startBtn: 'Start the check →',
      switchSecondary: 'Go to the Tigran (ENTP) test',
      receipt: '<strong>SOLOMON RECEIPT #08</strong><br />\n01. Late-night tea ... 100%<br />\n02. Dry irony ........ OK<br />\n03. Extra pathos ..... 0.00<br />\n------------------------<br />\nSTATUS: READY TO CHECK',
      svg: { archive: 'SOLOMON ARCHIVE' },
      result: {
        stamp: 'VERDICT ISSUED · ARCHIVE No. 042',
        sealTop: 'MATCH',
        sealBottom: 'SOLOMON INDEX',
        footnote: '*an extract from the personal file is attached to the sketchbook',
        note1: '// Where you match',
        note2: '// Where you differ',
        note3: '// A note from Solomon',
        switchBtn: 'Check common ground with Tigran →',
        share: 'I took the Solomon archive test: my result is {pct}% ("{rank}").'
      },
      questions: [
        {
          text: 'Late evening, quiet and rain outside. Your ideal plan:',
          options: [
            'Open a sketchbook or photo archive and draw a few noir frames or film cards.',
            'Dig into an old story, a timeline or the psychology of an act — figure out why it all went that way.',
            'Put on heavy rock, metal or a soundtrack with character and vanish into your own world for a couple of hours.',
            'Brew strong evening tea with spices, or simply watch quietly what is going on.'
          ]
        },
        {
          text: 'How do you treat "great truths" and other people\'s advice?',
          options: [
            'With a philosophical smirk: wisdom sounds great right up until it meets reality.',
            'I like getting to the core, but I serve it with dry irony, not guru pathos.',
            'If I do make a forecast, it comes with a touch of drama, sarcasm and theatricality.',
            'I would rather observe and draw my own conclusions than give lectures.'
          ]
        },
        {
          text: 'Your approach to chaos, deadlines and sudden turns:',
          options: [
            'I build a system, table or diagram — order saves you even where everything is on fire.',
            'I immediately look for a workaround, an unusual tool or a clever trick.',
            'I pause, exhale and look at the situation as just another plot twist.',
            'I act on nerve and intuition: we will figure it out on the way, style is what matters.'
          ]
        },
        {
          text: 'Which aesthetic is closest to you?',
          options: [
            'Film grain, old receipts, wear and tear, vintage watches, lamp light and the texture of paper.',
            'Gloomy noir, dark fantasy, antiquity and contrasty light.',
            'Surrealism and the absurd: when an ordinary thing suddenly starts living its own life.',
            'Clean minimalism, a tidy grid, precise typography and one sharp accent.'
          ]
        },
        {
          text: 'What do you notice first in people?',
          options: [
            'Self-irony, a sharp mind and the ability not to take themselves too seriously.',
            'Strange, rare hobbies — what gives away a living personality instead of a template.',
            'An inner core, loyalty to principles and depth.',
            'Honesty without extra sweetness or forced optimism.'
          ]
        },
        {
          text: 'If your life were a board game, a game or a film, it would be:',
          options: [
            'A non-linear detective story full of clues, margin notes and hidden rooms.',
            'A D&D campaign where the game master loves moral dilemmas and colorful characters.',
            'An auteur film where dialogue matters more than explosions and the atmosphere holds until the credits.',
            'A sandbox where you can assemble your own build and see what breaks.'
          ]
        },
        {
          text: 'How does your "dark" or ironic side show up?',
          options: [
            'In dry sarcasm that sounds almost ordinary until you think about it.',
            'In a habit of noticing every inconsistency, detail and hidden motive.',
            'In a love of "villain" archives, secret plans and drama for art\'s sake.',
            'In night-time ideas that seem brilliant in the morning… or maximally strange.'
          ]
        },
        {
          text: 'What is your main resource during the day?',
          options: [
            'Silence, focus and at least a couple of hours without background noise.',
            'Good music in headphones and a sense of control over the process.',
            'Movement, a change of scenery or a short reset outside the routine.',
            'People you can be silent with or discuss something truly interesting.'
          ]
        }
      ],
      ranks: [
        {
          title: 'Casual Passer-by',
          lead: 'You peeked into this sketchbook by accident: your life has too much daylight and too little pull toward archive investigations.',
          match: 'Common sense and the ability not to turn an ordinary Tuesday into a noir detective story.',
          diff: 'You do not need stacks of old notes, dry sarcasm and night-time silence to feel at home.',
          advice: 'Do not stay in the archive too late — the weather outside is clearly nice today.'
        },
        {
          title: 'Free Observer',
          lead: 'You value good irony and notice oddities around you, but you know when to close the notebook and not go too deep.',
          match: 'A healthy skepticism toward loud slogans and a taste for unusual stories.',
          diff: 'You have less night-time perfectionism and fatalism — and, honestly, that sometimes saves you.',
          advice: 'Leave a few blank pages in your notebook for sudden ideas after midnight.'
        },
        {
          title: 'Keeper of Strange Notes',
          lead: 'A confident resonance. You love the texture of paper, notice details off-frame and can joke with a perfectly calm face.',
          match: 'A pull toward vintage aesthetics, respect for silence and a habit of figuring out how things really work.',
          diff: 'Sometimes you still allow yourself pure improvisation without a prior plan.',
          advice: 'Keep today\'s receipt or ticket — in six months it will fit the archive perfectly.'
        },
        {
          title: 'Master of Dry Irony',
          lead: 'Almost a textbook match. Your inner compass is tuned to a sharp mind, night-time focus, music with character and subtle absurdity.',
          match: 'A rare blend of systematic thinking, self-irony and a love of stories with a double bottom.',
          diff: 'The differences are minimal and concern little more than how strong the evening tea is.',
          advice: 'Do not waste your sarcasm on people who will never read the footnote in small print.'
        },
        {
          title: 'Practically Solomon',
          lead: 'An alarmingly high percentage. The archive suspects the owner filled in this sketchbook himself under an alias.',
          match: 'Nearly the whole cultural and behavioral code — from night sketches to your reaction to other people\'s pathos.',
          diff: 'The only difference is the handwriting in the margins and the copy number of the notebook.',
          advice: 'Brew strong tea, put on your favorite album and do not show your drafts to anyone.'
        }
      ]
    },
    tigran: {
      signature: 'Tigran // ENTP',
      role: 'Debater · Strategist · Engineer of meanings',
      title: 'Will you find<br /><span class="handwritten-word">common ground?</span>',
      caption: 'Compatibility protocol · MBTI: ENTP & live dialogue',
      footnote: '*calibrated on texting style, sense of humor, love of paradox, structure and intellectual sparring',
      description: 'Tigran has the rare ENTP combination: an explosive idea generator, dry absurd humor and a love of deep topics (history, design, investigations, board games) paired with a love of clear structure in practical matters. Check how easily you will catch the same wave.',
      startBtn: 'Check common ground →',
      switchSecondary: 'Back to the "How Solomon are you?" test',
      receipt: '<strong>DIALOG PROTOCOL // ENTP</strong><br />\n01. Irony &amp; debates ... MAX<br />\n02. Specifics at work .. OK<br />\n03. Boredom &amp; pathos . 0.00<br />\n------------------------<br />\nMODE: INTELLECT SPARRING',
      svg: { b1: 'THESIS // IDEA', b2a: 'ENTP // TWIST', b2b: '"What if not?"' },
      result: {
        stamp: 'RESONANCE MEASURED · ENTP PROTOCOL',
        sealTop: 'COMMON GROUND',
        sealBottom: 'TIGRAN SYNC',
        footnote: '*report based on ENTP cognitive functions (Ne-Ti-Fe-Si)',
        note1: '// Where you catch the wave',
        note2: '// Possible sparks',
        note3: '// Tigran\'s field note',
        switchBtn: 'Take "How Solomon are you?" →',
        share: 'Our compatibility in talking with Tigran (ENTP) is {pct}% ("{rank}").'
      },
      questions: [
        {
          text: 'In conversation and texting you prefer:',
          options: [
            'Clear, to the point and in bullet points — so it is immediately obvious what is what.',
            'Through jokes, light absurdity and irony — even when the topic is serious.',
            'Calm, thoughtful and detailed, without fuss.',
            'On a roll: short replies, fast exchange of ideas and vibes.'
          ]
        },
        {
          text: 'How do you feel about plans, lists and procedures?',
          options: [
            'I love it when everything is sorted onto shelves — it instantly gets easier to breathe.',
            'A useful base, but in life you still have to improvise as you go.',
            'I add just as much structure as needed so as not to drown in chaos.',
            'Rigid frames suffocate — freedom and movement suit me better.'
          ]
        },
        {
          text: 'What is good humor to you?',
          options: [
            'Dry irony that points out the absurdities of everyday life.',
            'Unexpected absurdity and strange turns that first make you stare silently at a point.',
            'Subtle sarcasm that hits the character of a person or situation.',
            'Lively, fast comedy without long hidden depths.'
          ]
        },
        {
          text: 'What could you talk about for hours if a topic hooks you?',
          options: [
            'History, empires, human fates, philosophy and the hidden motives behind actions.',
            'Design, visuals, film, music, games and how cool things work on the inside.',
            'Strange facts, investigations, puzzles and "how does this even work".',
            'Life stories, adventures, arguments about taste and tales "from practice".'
          ]
        },
        {
          text: 'Your reaction when something goes off plan right before a deadline or a meeting:',
          options: [
            'I quickly rebuild the route and look for a working solution instead of panicking.',
            'I make an ironic remark like "classic" and do what needs doing.',
            'I collect my thoughts, set priorities and finish the main thing.',
            'I take it philosophically: whatever has not broken for good, we will survive.'
          ]
        },
        {
          text: 'Which way of spending time together resonates more?',
          options: [
            'A quiet evening with music, heart-to-heart talks or digging into interesting topics.',
            'Board games, games, film or a joint creative "let\'s build something".',
            'A walk, a change of place, the road and watching the city around.',
            'Spontaneous get-togethers where everything is decided on the spot without extra pathos.'
          ]
        },
        {
          text: 'What annoys you most in dealing with people?',
          options: [
            'Empty pathos, claiming the ultimate truth and no self-irony.',
            'Vagueness, dodging a direct answer and chaos for chaos\'s sake.',
            'Superficiality and indifference to detail when everyone says "good enough".',
            'Dullness, nitpicking and extra drama out of nowhere.'
          ]
        },
        {
          text: 'If you imagine your shared vibe as a soundtrack or a mood:',
          options: [
            'Deep rock, a dark atmosphere and a sense of a long road ahead.',
            'Contrast: a little noir, a little irony and a dense rhythm.',
            'Calm evening focus with warm light and good taste.',
            'A lively, unpredictable mix — from quiet talk to loud laughter.'
          ]
        }
      ],
      ranks: [
        {
          title: 'Parallel Universes',
          lead: 'You speak on different frequencies: where an ENTP starts a thought experiment and argues for the thrill, you want quiet and predictability.',
          match: 'Mutual politeness at the start and the ability not to get in each other\'s way.',
          diff: 'The pace of dialogue is too different: paradoxes, dry sarcasm and jumping between ten topics in one evening can tire you fast.',
          advice: 'If a conversation starts, stick to concrete practical tasks — there you will certainly agree.'
        },
        {
          title: 'Diplomatic Neutrality',
          lead: 'You can have a great chat over tea or quickly settle a work question, as long as you stay out of long philosophical battles.',
          match: 'Respect for common sense and the ability to enjoy a good joke without extra drama.',
          diff: 'Tigran (ENTP) may miss intellectual sparring and absurdity, and you may miss a slightly more even, calm rhythm.',
          advice: 'Your best format is discussing a specific film, game or project without sliding into endless "what ifs".'
        },
        {
          title: 'Reliable Dialogue Ally',
          lead: 'Good working and human contact. You are not scared by irony, you value structure in practical matters and you are ready to dig below the surface.',
          match: 'A dislike of empty pathos, a love of detail and the ability to switch from a joke to a clear plan.',
          diff: 'Sometimes the ENTP urge to test any idea by arguing may feel a bit sharp to you — but it comes from interest, not malice.',
          advice: 'Feel free to throw an unusual hypothesis or good music into the conversation — the connection will strengthen right away.'
        },
        {
          title: 'Co-author of Night Theories',
          lead: 'High compatibility. You easily jump from historical paradoxes and design to dry absurd humor and clear diagrams.',
          match: 'A sharp mind, self-irony, a love of deep dives and the ability not to turn disagreement into offense.',
          diff: 'Perhaps only in the argument over who is in charge of procedure today and who generates the crazy ideas.',
          advice: 'The ideal setting: a board game, a long evening conversation or a joint project with a deadline.'
        },
        {
          title: 'Absolute ENTP-Level Resonance',
          lead: 'A rare hit on the same frequency. You catch hints, laugh at the same absurd twists and equally value order with character.',
          match: 'Almost the whole spectrum: from a bullet-point texting style and dry sarcasm to a love of history, games and night-time focus.',
          diff: 'The only risk is talking until four in the morning, taking apart how the world works and why people do what they do.',
          advice: 'Open the chat right now or sit down at one table: there will not be a boring minute.'
        }
      ]
    }
  }
};
