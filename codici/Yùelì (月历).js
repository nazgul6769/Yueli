let currentLang = 'ita';
    let currentTheme = 'light';
    let lastCalculatedProfile = null;

    // Colori associati agli elementi per styling dinamico
    const elementColors = {
        Wood: '#27ae60',
        Fire: '#e74c3c',
        Earth: '#d35400',
        Metal: '#7f8c8d',
        Water: '#2980b9'
    };

    const translations = {
        ita: {
            title: "🐉 Zodiaco Cinese 🐉",
            subtitle: "Calcola il tuo animale guida e la sfumatura del tuo elemento",
            calcTitle: "Calcola il tuo Segno ed Elemento",
            dateLabel: "Inserisci la tua data di nascita:",
            hourLabel: "Ora di nascita (opzionale per l'Ascendente):",
            optUnknown: "Non conosco l'ora",
            btn: "Trova Profilo Completo",
            guideTitle: "Come gli Elementi Modificano i Segni",
            guideSub: "L'animale rappresenta la personalità di base, mentre l'elemento funge da 'modificatore' del carattere.",
            animalsTitle: "I 12 Segni dello Zodiaco",
            alertDate: "Seleziona una data valida!",
            of: "di",
            elementTxt: "Elemento",
            lunarYear: "Anno Lunare",
            baseChar: "Carattere di base",
            elementInfluence: "Influenza dell'elemento",
            ascendantTitle: "Ascendente (Segno dell'Ora)",
            compatTitle: "Affinità di Coppia",
            luckyTitle: "Simboli Fortunati",
            btnCopy: "📋 Copia Profilo",
            btnDownload: "🖼️ Scarica Card",
            copiedAlert: "Profilo copiato negli appunti!",
            compatibleWith: "Compatibile con",
            conflictWith: "In conflitto con",
            luckyNumbers: "Numeri fortunati",
            luckyColors: "Colori fortunati",
            luckyFlowers: "Fiori fortunati",
            animals: [
                { id: "Rat", name: "Topo", emoji: "🐭", desc: "Intelligente, astuto, intraprendente e socievole.", compat: ["Dragon", "Monkey", "Ox"], conflict: "Horse", numbers: "2, 3", colors: "Blu, Oro, Verde", flowers: "Giglio, Orchidea" },
                { id: "Ox", name: "Bue", emoji: "🐂", desc: "Paziente, lavoratore, affidabile e determinato.", compat: ["Rat", "Snake", "Rooster"], conflict: "Goat", numbers: "1, 4", colors: "Bianco, Giallo, Verde", flowers: "Tulipano, Pesco" },
                { id: "Tiger", name: "Tigre", emoji: "🐅", desc: "Coraggiosa, passionale, leader naturale e imprevedibile.", compat: ["Horse", "Dog", "Pig"], conflict: "Monkey", numbers: "1, 3, 4", colors: "Blu, Grigio, Arancione", flowers: "Cineraria" },
                { id: "Rabbit", name: "Coniglio", emoji: "🐇", desc: "Gentile, sensibile, elegante e pacifico.", compat: ["Goat", "Pig", "Dog"], conflict: "Rooster", numbers: "3, 4, 6", colors: "Rosso, Rosa, Viola", flowers: "Giglio di San Luigi, Gelsomino" },
                { id: "Dragon", name: "Drago", emoji: "🐉", desc: "Carismatico, potente, fortunato e pieno di energia.", compat: ["Rat", "Monkey", "Rooster"], conflict: "Dog", numbers: "1, 6, 7", colors: "Oro, Argento, Grigio", flowers: "Sanguinella, Orchidea" },
                { id: "Snake", name: "Serpente", emoji: "🐍", desc: "Saggio, intuitivo, misterioso e calcolatore.", compat: ["Ox", "Rooster"], conflict: "Pig", numbers: "2, 8, 9", colors: "Nero, Rosso, Giallo", flowers: "Orchidea, Cactus" },
                { id: "Horse", name: "Cavallo", emoji: "🐎", desc: "Indipendente, dinamico, amante della libertà e solare.", compat: ["Tiger", "Goat", "Dog"], conflict: "Rat", numbers: "2, 3, 7", colors: "Giallo, Verde", flowers: "Calla, Girasole" },
                { id: "Goat", name: "Capra", emoji: "🐐", desc: "Creativa, empatica, tranquilla e artistica.", compat: ["Rabbit", "Horse", "Pig"], conflict: "Ox", numbers: "2, 7", colors: "Verde, Rosso, Viola", flowers: "Garofano, Primula" },
                { id: "Monkey", name: "Scimmia", emoji: "🐒", desc: "Vivace, arguta, curiosa e abile nel risolvere problemi.", compat: ["Rat", "Dragon", "Snake"], conflict: "Tiger", numbers: "4, 9", colors: "Bianco, Blu, Oro", flowers: "Crisantemo" },
                { id: "Rooster", name: "Gallo", emoji: "🐓", desc: "Osservatore, preciso, orgoglioso e puntuale.", compat: ["Ox", "Dragon", "Snake"], conflict: "Rabbit", numbers: "5, 7, 8", colors: "Oro, Marrone, Giallo", flowers: "Cresta di Gallo" },
                { id: "Dog", name: "Cane", emoji: "🐕", desc: "Leale, onesto, protettivo e affidabile.", compat: ["Tiger", "Rabbit", "Horse"], conflict: "Dragon", numbers: "3, 4, 9", colors: "Rosso, Verde, Viola", flowers: "Raddoppio, Rosa" },
                { id: "Pig", name: "Maiale", emoji: "🐖", desc: "Generoso, sincero, tollerante e amante della buona vita.", compat: ["Goat", "Tiger", "Rabbit"], conflict: "Snake", numbers: "2, 5, 8", colors: "Giallo, Grigio, Marrone", flowers: "Ortensia" }
            ],
            elements: {
                "Wood": { name: "Legno", emoji: "🌱", modifier: "Aggiunge creatività, flessibilità, spirito collaborativo e orientamento alla crescita." },
                "Fire": { name: "Fuoco", emoji: "🔥", modifier: "Amplifica la passione, il dinamismo, il carisma e l'impulsività verso l'azione." },
                "Earth": { name: "Terra", emoji: "⛰️", modifier: "Porta stabilità, senso pratico, concretezza, prudenza e grande affidabilità." },
                "Metal": { name: "Metallo", emoji: "🗡️", modifier: "Aumenta la determinazione, la forza di volontà, la rigidità e il senso di giustizia." },
                "Water": { name: "Acqua", emoji: "🌊", modifier: "Conferisce spiccata intuizione, empatia, capacità di adattamento e diplomazia." }
            }
        },
        eng: {
            title: "🐉 Chinese Zodiac 🐉",
            subtitle: "Calculate your guide animal and your element modifier",
            calcTitle: "Calculate Your Sign & Element",
            dateLabel: "Enter your date of birth:",
            hourLabel: "Birth hour (optional for Ascendant):",
            optUnknown: "I don't know the hour",
            btn: "Find Full Profile",
            guideTitle: "How Elements Modify the Signs",
            guideSub: "The animal represents base personality, while the element acts as a character 'modifier'.",
            animalsTitle: "The 12 Zodiac Signs",
            alertDate: "Please select a valid date!",
            of: "of",
            elementTxt: "Element",
            lunarYear: "Lunar Year",
            baseChar: "Base character",
            elementInfluence: "Element influence",
            ascendantTitle: "Ascendant (Hour Sign)",
            compatTitle: "Compatibility",
            luckyTitle: "Lucky Symbols",
            btnCopy: "📋 Copy Profile",
            btnDownload: "🖼️ Download Card",
            copiedAlert: "Profile copied to clipboard!",
            compatibleWith: "Best with",
            conflictWith: "Conflict with",
            luckyNumbers: "Lucky numbers",
            luckyColors: "Lucky colors",
            luckyFlowers: "Lucky flowers",
            animals: [
                { id: "Rat", name: "Rat", emoji: "🐭", desc: "Smart, resourceful, versatile, and outgoing.", compat: ["Dragon", "Monkey", "Ox"], conflict: "Horse", numbers: "2, 3", colors: "Blue, Gold, Green", flowers: "Lily, Orchid" },
                { id: "Ox", name: "Ox", emoji: "🐂", desc: "Patient, hardworking, reliable, and determined.", compat: ["Rat", "Snake", "Rooster"], conflict: "Goat", numbers: "1, 4", colors: "White, Yellow, Green", flowers: "Tulip, Peach Blossom" },
                { id: "Tiger", name: "Tiger", emoji: "🐅", desc: "Brave, passionate, natural leader, and unpredictable.", compat: ["Horse", "Dog", "Pig"], conflict: "Monkey", numbers: "1, 3, 4", colors: "Blue, Grey, Orange", flowers: "Cineraria" },
                { id: "Rabbit", name: "Rabbit", emoji: "🐇", desc: "Kind, sensitive, elegant, and peaceful.", compat: ["Goat", "Pig", "Dog"], conflict: "Rooster", numbers: "3, 4, 6", colors: "Red, Pink, Purple", flowers: "Jasmine" },
                { id: "Dragon", name: "Dragon", emoji: "🐉", desc: "Charismatic, powerful, lucky, and full of energy.", compat: ["Rat", "Monkey", "Rooster"], conflict: "Dog", numbers: "1, 6, 7", colors: "Gold, Silver, Grey", flowers: "Orchid" },
                { id: "Snake", name: "Snake", emoji: "🐍", desc: "Wise, intuitive, mysterious, and calculating.", compat: ["Ox", "Rooster"], conflict: "Pig", numbers: "2, 8, 9", colors: "Black, Red, Yellow", flowers: "Orchid, Cactus" },
                { id: "Horse", name: "Horse", emoji: "🐎", desc: "Independent, dynamic, freedom-loving, and cheerful.", compat: ["Tiger", "Goat", "Dog"], conflict: "Rat", numbers: "2, 3, 7", colors: "Yellow, Green", flowers: "Sunflower" },
                { id: "Goat", name: "Goat", emoji: "🐐", desc: "Creative, empathetic, calm, and artistic.", compat: ["Rabbit", "Horse", "Pig"], conflict: "Ox", numbers: "2, 7", colors: "Green, Red, Purple", flowers: "Carnation" },
                { id: "Monkey", name: "Monkey", emoji: "🐒", desc: "Lively, witty, curious, and sharp problem solver.", compat: ["Rat", "Dragon", "Snake"], conflict: "Tiger", numbers: "4, 9", colors: "White, Blue, Gold", flowers: "Chrysanthemum" },
                { id: "Rooster", name: "Rooster", emoji: "🐓", desc: "Observant, precise, proud, and punctual.", compat: ["Ox", "Dragon", "Snake"], conflict: "Rabbit", numbers: "5, 7, 8", colors: "Gold, Brown, Yellow", flowers: "Cockscomb" },
                { id: "Dog", name: "Dog", emoji: "🐕", desc: "Loyal, honest, protective, and trustworthy.", compat: ["Tiger", "Rabbit", "Horse"], conflict: "Dragon", numbers: "3, 4, 9", colors: "Red, Green, Purple", flowers: "Rose" },
                { id: "Pig", name: "Pig", emoji: "🐖", desc: "Generous, sincere, tolerant, and easygoing.", compat: ["Goat", "Tiger", "Rabbit"], conflict: "Snake", numbers: "2, 5, 8", colors: "Yellow, Grey, Brown", flowers: "Hydrangea" }
            ],
            elements: {
                "Wood": { name: "Wood", emoji: "🌱", modifier: "Adds creativity, flexibility, teamwork spirit, and growth orientation." },
                "Fire": { name: "Fire", emoji: "🔥", modifier: "Amplifies passion, dynamism, charisma, and action-driven impulsiveness." },
                "Earth": { name: "Earth", emoji: "⛰️", modifier: "Brings stability, practical sense, groundedness, caution, and reliability." },
                "Metal": { name: "Metal", emoji: "🗡️", modifier: "Increases determination, willpower, rigidity, and sense of justice." },
                "Water": { name: "Water", emoji: "🌊", modifier: "Grants deep intuition, empathy, adaptability, and diplomacy." }
            }
        },
        esp: {
            title: "🐉 Zodiaco Chino 🐉",
            subtitle: "Calcula tu animal guía y el matiz de tu elemento",
            calcTitle: "Calcula tu Signo y Elemento",
            dateLabel: "Introduce tu fecha de nacimiento:",
            hourLabel: "Hora de nacimiento (opcional para el Ascendente):",
            optUnknown: "No conozco la hora",
            btn: "Ver Perfil Completo",
            guideTitle: "Cómo Modifican los Elementos a los Signos",
            guideSub: "El animal representa la personalidad básica, mientras que el elemento actúa como un 'modificador'.",
            animalsTitle: "Los 12 Signos del Zodiaco",
            alertDate: "¡Por favor, selecciona una fecha válida!",
            of: "de",
            elementTxt: "Elemento",
            lunarYear: "Año Lunar",
            baseChar: "Carácter básico",
            elementInfluence: "Influencia del elemento",
            ascendantTitle: "Ascendente (Signo de la Hora)",
            compatTitle: "Compatibilidad",
            luckyTitle: "Símbolos de la Suerte",
            btnCopy: "📋 Copiar Perfil",
            btnDownload: "🖼️ Descargar Carta",
            copiedAlert: "¡Perfil copiado al portapapeles!",
            compatibleWith: "Compatible con",
            conflictWith: "En conflicto con",
            luckyNumbers: "Números de la suerte",
            luckyColors: "Colores de la suerte",
            luckyFlowers: "Flores de la suerte",
            animals: [
                { id: "Rat", name: "Rata", emoji: "🐭", desc: "Inteligente, astuta, ingeniosa y sociable.", compat: ["Dragon", "Monkey", "Ox"], conflict: "Horse", numbers: "2, 3", colors: "Azul, Oro, Verde", flowers: "Lirio" },
                { id: "Ox", name: "Buey", emoji: "🐂", desc: "Paciente, trabajador, confiable y determinado.", compat: ["Rat", "Snake", "Rooster"], conflict: "Goat", numbers: "1, 4", colors: "Blanco, Amarillo", flowers: "Tulipán" },
                { id: "Tiger", name: "Tigre", emoji: "🐅", desc: "Valiente, apasionado, líder natural e impredecible.", compat: ["Horse", "Dog", "Pig"], conflict: "Monkey", numbers: "1, 3, 4", colors: "Azul, Gris", flowers: "Cineraria" },
                { id: "Rabbit", name: "Conejo", emoji: "🐇", desc: "Amable, sensible, elegante y pacífico.", compat: ["Goat", "Pig", "Dog"], conflict: "Rooster", numbers: "3, 4, 6", colors: "Rojo, Rosa", flowers: "Jazmín" },
                { id: "Dragon", name: "Dragón", emoji: "🐉", desc: "Carismático, poderoso, afortunado y lleno de energía.", compat: ["Rat", "Monkey", "Rooster"], conflict: "Dog", numbers: "1, 6, 7", colors: "Oro, Plata", flowers: "Orquídea" },
                { id: "Snake", name: "Serpiente", emoji: "🐍", desc: "Sabia, intuitiva, misteriosa y calculadora.", compat: ["Ox", "Rooster"], conflict: "Pig", numbers: "2, 8, 9", colors: "Negro, Rojo", flowers: "Cactus" },
                { id: "Horse", name: "Caballo", emoji: "🐎", desc: "Independiente, dinámico, amante de la libertad y alegre.", compat: ["Tiger", "Goat", "Dog"], conflict: "Rat", numbers: "2, 3, 7", colors: "Amarillo, Verde", flowers: "Girasol" },
                { id: "Goat", name: "Cabra", emoji: "🐐", desc: "Creativa, empática, tranquila y artística.", compat: ["Rabbit", "Horse", "Pig"], conflict: "Ox", numbers: "2, 7", colors: "Verde, Rojo", flowers: "Clavel" },
                { id: "Monkey", name: "Mono", emoji: "🐒", desc: "Alegre, agudo, curioso y hábil para resolver problemas.", compat: ["Rat", "Dragon", "Snake"], conflict: "Tiger", numbers: "4, 9", colors: "Blanco, Azul", flowers: "Crisantemo" },
                { id: "Rooster", name: "Gallo", emoji: "🐓", desc: "Observador, preciso, orgulloso y puntual.", compat: ["Ox", "Dragon", "Snake"], conflict: "Rabbit", numbers: "5, 7, 8", colors: "Oro, Marrón", flowers: "Cresta de gallo" },
                { id: "Dog", name: "Perro", emoji: "🐕", desc: "Leal, honesto, protector y confiable.", compat: ["Tiger", "Rabbit", "Horse"], conflict: "Dragon", numbers: "3, 4, 9", colors: "Rojo, Verde", flowers: "Rosa" },
                { id: "Pig", name: "Cerdo", emoji: "🐖", desc: "Generoso, sincero, tolerante y amante de la buena vida.", compat: ["Goat", "Tiger", "Rabbit"], conflict: "Snake", numbers: "2, 5, 8", colors: "Amarillo, Gris", flowers: "Hortensia" }
            ],
            elements: {
                "Wood": { name: "Madera", emoji: "🌱", modifier: "Añade creatividad, flexibilidad, trabajo en equipo y orientación al crecimiento." },
                "Fire": { name: "Fuego", emoji: "🔥", modifier: "Amplifica la pasión, el dinamismo, el carisma y la impulsividad hacia la acción." },
                "Earth": { name: "Tierra", emoji: "⛰️", modifier: "Aporta estabilidad, sentido práctico, solidez, prudencia y gran fiabilidad." },
                "Metal": { name: "Metal", emoji: "🗡️", modifier: "Aumenta la determinación, la fuerza de voluntad, la rigidez y el sentido de justicia." },
                "Water": { name: "Agua", emoji: "🌊", modifier: "Otorga gran intuición, empatía, capacidad de adaptación y diplomacia." }
            }
        },
        jpn: {
            title: "🐉 干支・五行診断 🐉",
            subtitle: "生年月日からあなたの十二支と五行属性を計算します",
            calcTitle: "十二支と五行を計算",
            dateLabel: "生年月日を入力してください:",
            hourLabel: "出生時間（アセンダント計算用・任意）:",
            optUnknown: "時間を知らない",
            btn: "プロファイルを表示",
            guideTitle: "五行が十二支に与える影響",
            guideSub: "十二支は基本性格を表し、五行属性はその性質を補正・強化します。",
            animalsTitle: "十二支（十二の干支）",
            alertDate: "有効な日付を選択してください！",
            of: "の",
            elementTxt: "五行属性",
            lunarYear: "旧暦年",
            baseChar: "基本性格",
            elementInfluence: "五行の影響",
            ascendantTitle: "アセンダント（時間の干支）",
            compatTitle: "相性診断",
            luckyTitle: "幸運のシンボル",
            btnCopy: "📋 プロフィールをコピー",
            btnDownload: "🖼️ カードをダウンロード",
            copiedAlert: "クリップボードにコピーしました！",
            compatibleWith: "相性の良いサイン",
            conflictWith: "注意が必要なサイン",
            luckyNumbers: "ラッキーナンバー",
            luckyColors: "ラッキーカラー",
            luckyFlowers: "幸運の花",
            animals: [
                { id: "Rat", name: "子（ねずみ）", emoji: "🐭", desc: "頭脳明晰で好機を逃さず、適応力と社交性に優れています。", compat: ["Dragon", "Monkey", "Ox"], conflict: "Horse", numbers: "2, 3", colors: "青, 金, 緑", flowers: "ユリ, ラン" },
                { id: "Ox", name: "丑（うし）", emoji: "🐂", desc: "忍耐強く真面目で、信頼感があり目標に向かって着実に進みます。", compat: ["Rat", "Snake", "Rooster"], conflict: "Goat", numbers: "1, 4", colors: "白, 黄, 緑", flowers: "チューリップ" },
                { id: "Tiger", name: "寅（とら）", emoji: "🐅", desc: "勇敢で情熱的、カリスマ性のあるリーダータイプです。", compat: ["Horse", "Dog", "Pig"], conflict: "Monkey", numbers: "1, 3, 4", colors: "青, グレー", flowers: "シネラリア" },
                { id: "Rabbit", name: "卯（うさぎ）", emoji: "🐇", desc: "穏やかで繊細、洗練された平和主義者です。", compat: ["Goat", "Pig", "Dog"], conflict: "Rooster", numbers: "3, 4, 6", colors: "赤, ピンク", flowers: "ジャスミン" },
                { id: "Dragon", name: "辰（たつ）", emoji: "🐉", desc: "エネルギッシュで運に恵まれ、強い存在感を放ちます。", compat: ["Rat", "Monkey", "Rooster"], conflict: "Dog", numbers: "1, 6, 7", colors: "金, 銀", flowers: "ラン" },
                { id: "Snake", name: "巳（へび）", emoji: "🐍", desc: "思慮深く直感力に優れ、神秘的な魅力を持っています。", compat: ["Ox", "Rooster"], conflict: "Pig", numbers: "2, 8, 9", colors: "黒, 赤", flowers: "サボテン" },
                { id: "Horse", name: "午（うま）", emoji: "🐎", desc: "自由を愛し、行動的で明るいエネルギーに満ちています。", compat: ["Tiger", "Goat", "Dog"], conflict: "Rat", numbers: "2, 3, 7", colors: "黄, 緑", flowers: "ヒマワリ" },
                { id: "Goat", name: "未（ひつじ）", emoji: "🐐", desc: "穏やかで共感力が高く、創造性と芸術的感性を備えています。", compat: ["Rabbit", "Horse", "Pig"], conflict: "Ox", numbers: "2, 7", colors: "緑, 赤", flowers: "カーネーション" },
                { id: "Monkey", name: "申（さる）", emoji: "🐒", desc: "好奇心旺盛で機転が利き、問題解決能力に長けています。", compat: ["Rat", "Dragon", "Snake"], conflict: "Tiger", numbers: "4, 9", colors: "白, 青", flowers: "キク" },
                { id: "Rooster", name: "酉（とり）", emoji: "🐓", desc: "観察眼があり几帳面、プライドが高く計画的です。", compat: ["Ox", "Dragon", "Snake"], conflict: "Rabbit", numbers: "5, 7, 8", colors: "金, 茶", flowers: "ケイトウ" },
                { id: "Dog", name: "戌（いぬ）", emoji: "🐕", desc: "忠実で誠実、正義感が強く仲間を大切にします。", compat: ["Tiger", "Rabbit", "Horse"], conflict: "Dragon", numbers: "3, 4, 9", colors: "赤, 緑", flowers: "バラ" },
                { id: "Pig", name: "亥（いのしし）", emoji: "🐖", desc: "情に厚く誠実で、寛容な心を持った平和を愛する人です。", compat: ["Goat", "Tiger", "Rabbit"], conflict: "Snake", numbers: "2, 5, 8", colors: "黄, グレー", flowers: "アジサイ" }
            ],
            elements: {
                "Wood": { name: "木", emoji: "🌱", modifier: "創造性、柔軟性、協調性、成長しようとする意欲を高めます。" },
                "Fire": { name: "火", emoji: "🔥", modifier: "情熱、行動力、カリスマ性、決断力を強調します。" },
                "Earth": { name: "土", emoji: "⛰️", modifier: "安定感、現実的な思考、慎重さ、高い信頼性をもたらします。" },
                "Metal": { name: "金", emoji: "🗡️", modifier: "強い意志力、決断力、正義感、初志貫徹する力を与えます。" },
                "Water": { name: "水", emoji: "🌊", modifier: "鋭い直感力、共感力、高い適応力と外交性を与えます。" }
            }
        }
    };

    // Calcolo preciso del Capodanno Cinese dal 1900 al 2100
    function getChineseNewYearDate(year) {
        const cnyDates = {
            1900: "1900-01-31", 1901: "1901-02-19", 1902: "1902-02-08", 1903: "1903-01-29", 1904: "1904-02-16",
            1905: "1905-02-04", 1906: "1906-01-25", 1907: "1907-02-13", 1908: "1908-02-02", 1909: "1909-01-22",
            1910: "1910-02-10", 1911: "1911-01-30", 1912: "1912-02-18", 1913: "1913-02-06", 1914: "1914-01-26",
            1915: "1915-02-14", 1916: "1916-02-03", 1917: "1917-01-23", 1918: "1918-02-11", 1919: "1919-02-01",
            1920: "1920-02-20", 1921: "1921-02-08", 1922: "1922-01-28", 1923: "1923-02-16", 1924: "1924-02-05",
            1925: "1925-01-24", 1926: "1926-02-13", 1927: "1927-02-02", 1928: "1928-01-23", 1929: "1929-02-10",
            1930: "1930-01-30", 1931: "1931-02-17", 1932: "1932-02-06", 1933: "1933-01-26", 1934: "1934-02-14",
            1935: "1935-02-04", 1936: "1936-01-24", 1937: "1937-02-11", 1938: "1938-01-31", 1939: "1939-02-19",
            1940: "1940-02-08", 1941: "1941-01-27", 1942: "1942-02-15", 1943: "1943-02-05", 1944: "1944-01-25",
            1945: "1945-02-13", 1946: "1946-02-02", 1947: "1947-01-22", 1948: "1948-02-10", 1949: "1949-01-29",
            1950: "1950-02-17", 1951: "1951-02-06", 1952: "1952-01-27", 1953: "1953-02-14", 1954: "1954-02-03",
            1955: "1955-01-24", 1956: "1956-02-12", 1957: "1957-01-31", 1958: "1958-02-18", 1959: "1959-02-08",
            1960: "1960-01-28", 1961: "1961-02-15", 1962: "1962-02-05", 1963: "1963-01-25", 1964: "1964-02-13",
            1965: "1965-02-02", 1966: "1966-01-21", 1967: "1967-02-09", 1968: "1968-01-30", 1969: "1969-02-17",
            1970: "1970-02-06", 1971: "1971-01-27", 1972: "1972-02-15", 1973: "1973-02-03", 1974: "1974-01-23",
            1975: "1975-02-11", 1976: "1976-01-31", 1977: "1977-02-18", 1978: "1978-02-07", 1979: "1979-01-28",
            1980: "1980-02-16", 1981: "1981-02-05", 1982: "1982-01-25", 1983: "1983-02-13", 1984: "1984-02-02",
            1985: "1985-02-20", 1986: "1986-02-09", 1987: "1987-01-29", 1988: "1988-02-17", 1989: "1989-02-06",
            1990: "1990-01-27", 1991: "1991-02-15", 1992: "1992-02-04", 1993: "1993-01-23", 1994: "1994-02-10",
            1995: "1995-01-31", 1996: "1996-02-19", 1997: "1997-02-07", 1998: "1998-01-28", 1999: "1999-02-16",
            2000: "2000-02-05", 2001: "2001-01-24", 2002: "2002-02-12", 2003: "2003-02-01", 2004: "2004-01-22",
            2005: "2005-02-09", 2006: "2006-01-29", 2007: "2007-02-18", 2008: "2008-02-07", 2009: "2009-01-26",
            2010: "2010-02-14", 2011: "2011-02-03", 2012: "2012-01-23", 2013: "2013-02-10", 2014: "2014-01-31",
            2015: "2015-02-19", 2016: "2016-02-08", 2017: "2017-01-28", 2018: "2018-02-16", 2019: "2019-02-05",
            2020: "2020-01-25", 2021: "2021-02-12", 2022: "2022-02-01", 2023: "2023-01-22", 2024: "2024-02-10",
            2025: "2025-01-29", 2026: "2026-02-17", 2027: "2027-02-06", 2028: "2028-01-26", 2029: "2029-02-13",
            2030: "2030-02-03"
        };
        return cnyDates[year] ? new Date(cnyDates[year]) : new Date(year, 1, 4);
    }

    function toggleTheme() {
        const body = document.body;
        const btn = document.getElementById('themeBtn');
        if (currentTheme === 'light') {
            body.setAttribute('data-theme', 'dark');
            currentTheme = 'dark';
            btn.innerText = '☀️';
        } else {
            body.removeAttribute('data-theme');
            currentTheme = 'light';
            btn.innerText = '🌙';
        }
    }

    function changeLanguage() {
        currentLang = document.getElementById('languageSelect').value;
        const langData = translations[currentLang];

        document.getElementById('txt-title').innerText = langData.title;
        document.getElementById('txt-subtitle').innerText = langData.subtitle;
        document.getElementById('txt-calc-title').innerText = langData.calcTitle;
        document.getElementById('txt-date-label').innerText = langData.dateLabel;
        document.getElementById('txt-hour-label').innerText = langData.hourLabel;
        document.getElementById('opt-unknown').innerText = langData.optUnknown;
        document.getElementById('txt-btn').innerText = langData.btn;
        document.getElementById('txt-guide-title').innerText = langData.guideTitle;
        document.getElementById('txt-guide-sub').innerText = langData.guideSub;
        document.getElementById('txt-animals-title').innerText = langData.animalsTitle;
        document.getElementById('txt-ascendant-title').innerText = langData.ascendantTitle;
        document.getElementById('txt-compat-title').innerText = langData.compatTitle;
        document.getElementById('txt-lucky-title').innerText = langData.luckyTitle;
        document.getElementById('btn-copy').innerText = langData.btnCopy;
        document.getElementById('btn-download').innerText = langData.btnDownload;

        renderElementsGuide();
        renderAnimalsGrid();

        if (document.getElementById('birthdate').value) {
            calculateZodiac();
        }
    }

    function renderElementsGuide() {
        const container = document.getElementById('elements-guide');
        container.innerHTML = '';
        const langData = translations[currentLang];

        for (const [key, val] of Object.entries(langData.elements)) {
            const card = document.createElement('div');
            card.className = 'element-desc-card';
            card.innerHTML = `
                <h4>${val.emoji} ${val.name}</h4>
                <div style="font-size: 0.85rem; color: var(--subtext);">${val.modifier}</div>
            `;
            container.appendChild(card);
        }
    }

    function renderAnimalsGrid() {
        const grid = document.getElementById('animals-grid');
        grid.innerHTML = '';
        const langData = translations[currentLang];

        langData.animals.forEach(a => {
            const card = document.createElement('div');
            card.className = 'animal-card';
            card.innerHTML = `
                <div class="animal-emoji">${a.emoji}</div>
                <div class="animal-name">${a.name}</div>
                <div style="font-size: 0.85rem; color: var(--subtext); margin-top: 5px;">${a.desc}</div>
            `;
            grid.appendChild(card);
        });
    }

    function calculateZodiac() {
        const input = document.getElementById('birthdate').value;
        const hourInput = document.getElementById('birthhour').value;
        const langData = translations[currentLang];

        if (!input) {
            alert(langData.alertDate);
            return;
        }

        const date = new Date(input);
        let year = date.getFullYear();
        
        const cnyDate = getChineseNewYearDate(year);
        if (date < cnyDate) {
            year--;
        }

        const animalIndex = (year - 1900) % 12;
        const animal = langData.animals[(animalIndex + 12) % 12];

        const lastDigit = Math.abs(year) % 10;
        let elementKey;
        if (lastDigit === 0 || lastDigit === 1) elementKey = "Metal";
        else if (lastDigit === 2 || lastDigit === 3) elementKey = "Water";
        else if (lastDigit === 4 || lastDigit === 5) elementKey = "Wood";
        else if (lastDigit === 6 || lastDigit === 7) elementKey = "Fire";
        else elementKey = "Earth";

        const elemData = langData.elements[elementKey];
        const activeColor = elementColors[elementKey];

        // Aggiorna colore dinamico della scheda
        document.documentElement.style.setProperty('--element-color', activeColor);
        document.getElementById('main-card').style.borderTopColor = activeColor;

        // Titolo del Risultato
        if (currentLang === 'jpn') {
            document.getElementById('res-title').innerText = `${animal.emoji} ${elemData.name}${langData.of}${animal.name}`;
        } else {
            document.getElementById('res-title').innerText = `${animal.emoji} ${animal.name} ${langData.of} ${elemData.name}`;
        }
        
        document.getElementById('res-element').innerHTML = `${langData.elementTxt}: <span class="element-badge element-${elemData.name}">${elemData.emoji} ${elemData.name}</span> (${langData.lunarYear}: ${year})`;
        document.getElementById('res-desc').innerText = `${langData.baseChar} (${animal.name}): ${animal.desc}`;
        document.getElementById('res-element-modifier').innerText = `${langData.elementInfluence} (${elemData.name}): ${elemData.modifier}`;

        // Ascendente Cinese (Ora di nascita)
        const ascContainer = document.getElementById('res-ascendant-container');
        if (hourInput !== "") {
            const hour = parseInt(hourInput);
            let ascIndex = 0;
            if (hour === 23 || hour === 0) ascIndex = 0; // Topo
            else ascIndex = Math.floor((hour + 1) / 2) % 12;

            const ascAnimal = langData.animals[ascIndex];
            document.getElementById('res-ascendant').innerText = `${ascAnimal.emoji} ${ascAnimal.name} - ${ascAnimal.desc}`;
            ascContainer.style.display = "block";
        } else {
            ascContainer.style.display = "none";
        }

        // Compatibilità
        const compatNames = animal.compat.map(id => langData.animals.find(a => a.id === id).name).join(", ");
        const conflictName = langData.animals.find(a => a.id === animal.conflict).name;
        document.getElementById('res-compatibility').innerHTML = `<strong>${langData.compatibleWith}:</strong> ${compatNames}<br><strong>${langData.conflictWith}:</strong> ${conflictName}`;

        // Fortuna e Simboli
        document.getElementById('res-lucky').innerHTML = `<strong>${langData.luckyNumbers}:</strong> ${animal.numbers}<br><strong>${langData.luckyColors}:</strong> ${animal.colors}<br><strong>${langData.luckyFlowers}:</strong> ${animal.flowers}`;

        // Mostra Box Risultati
        document.getElementById('result').style.display = "block";

        // Salva dati profilo per copia o esportazione
        lastCalculatedProfile = {
            title: document.getElementById('res-title').innerText,
            element: `${elemData.emoji} ${elemData.name}`,
            year: year,
            desc: animal.desc,
            modifier: elemData.modifier,
            lucky: `${animal.numbers} | ${animal.colors}`
        };
    }

    function copyResult() {
        if (!lastCalculatedProfile) return;
        const textToCopy = `✨ ${lastCalculatedProfile.title} ✨
${translations[currentLang].lunarYear}: ${lastCalculatedProfile.year}
${translations[currentLang].elementTxt}: ${lastCalculatedProfile.element}

${lastCalculatedProfile.desc}

Calcolato con Zodiaco Cinese App`;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert(translations[currentLang].copiedAlert);
        });
    }

    function downloadCard() {
        if (!lastCalculatedProfile) return;

        // Popola Card nascosta
        document.getElementById('card-out-title').innerText = translations[currentLang].title;
        document.getElementById('card-out-sign').innerText = lastCalculatedProfile.title;
        document.getElementById('card-out-elem').innerText = `${translations[currentLang].elementTxt}: ${lastCalculatedProfile.element} (${lastCalculatedProfile.year})`;
        document.getElementById('card-out-desc').innerText = lastCalculatedProfile.desc;
        document.getElementById('card-out-lucky').innerText = `${translations[currentLang].luckyTitle}: ${lastCalculatedProfile.lucky}`;

        const cardElem = document.getElementById('downloadable-card');

        html2canvas(cardElem, { scale: 2 }).then(canvas => {
            const link = document.createElement('a');
            link.download = `zodiaco_${lastCalculatedProfile.year}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    }

    // Registrazione Service Worker per Progressive Web App (PWA)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            const swCode = `
                self.addEventListener('install', e => e.waitUntil(self.skipWaiting()));
                self.addEventListener('fetch', e => e.respondWith(fetch(e.request).catch(() => caches.match(e.request))));
            `;
            const blob = new Blob([swCode], { type: 'application/javascript' });
            navigator.serviceWorker.register(URL.createObjectURL(blob)).catch(() => {});
        });
    }

    // Inizializzazione della pagina
    renderElementsGuide();
    renderAnimalsGrid();
