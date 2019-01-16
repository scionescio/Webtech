    // 1
    const getCharacterCount = (text) => {
        return text ?
            text.match(/./g).length : 0
    }

    console.log("getCharacterCount", getCharacterCount("!W-o r-t?"))

    // 2
    const getWords = (text) => {
        const pattern = /((\w|€)+)/g
        const words = text ? text.match(pattern) : []
        return words
    }

    console.log("getWords", getWords("Hi 123 _ 10€ 3.33"))

    // 3
    const getLongestWords = (text) => {
        let maxLength = 0
        const words = getWords(text)
        words.forEach(x => maxLength = getCharacterCount(x) > maxLength ? getCharacterCount(x) : maxLength)
        return words.filter(x => getCharacterCount(x) === maxLength)
    }

    console.log("getLongestWords", getLongestWords("Hi 123 _ 10€ 3.33"))

    // 4 basically the solution to homework 7.4
    const getWordFrequency = (text) => {
        const words = getWords(text)
        const map = words.map(x => x.toLowerCase()).reduce(
            (frequency, y) =>
            frequency.has(y) ? frequency.set(y, frequency.get(y) + 1) : frequency.set(y, 1),
            new Map()
        );
        return text ? strMapToObj(map) : {}
    }

    const strMapToObj = strMap => {
        const obj = Object.create(null)
        for (const [k, v] of strMap) {
            obj[k] = v
        }
        console.log(obj)
        return obj
    }

    console.log("getWordFrequency", getWordFrequency("Hi hi constructor _ 10€ 3.10€"))

    // 5
    const filterTUBMails = (text) => {
        words = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g);
        return words ? words : {}
    }

    console.log("filterTUBMails", filterTUBMails("Eine mögliche Adresse ist max-mustermann@mailbox.tu-berlin.de aber auch admin+superschlau@mailbox.tu-berlin.de und auch pascalis.maschke@t-online.de."));

    //6 
    const getUnpublishingDate = (text) => {
        const pattern = /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])(T)([0-9]{2}):([0-9]{2}):([0-9]{2}).([0-9]{3})([A-Z])/
        const parts = text.match(pattern)
        console.log(parts)


        return new Date(text.replace(pattern, makeDate))
    }
    const makeDate = (match, year, month, day, time, hour, minute, second, millisecond, zone) => {
        console.log("makeDate:", match, year, month, day, time, hour, minute, second, millisecond, zone)
        return (parseInt(year), parseInt(month), parseInt(day), time, parseInt(hour), parseInt(minute), parseInt(second), parseInt(millisecond), zone)
    }

    console.log("getUnpublishingDate", getUnpublishingDate("2018-01-10T18:00:00.000Z"))

    //"$1 $2 $3 $4 $5 $6 $7 $8 $9"