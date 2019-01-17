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
        )
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
        words = text.match(/([a-zA-Z0-9._-]+@(mailbox.tu-berlin.de))/gi);

        return words ? words.map(x => x.toLowerCase()) : []
    }

    console.log("filterTUBMails", filterTUBMails("Eine mögliche Adresse ist max-mustermann@Mailbox.Tu-berlin.de aber auch admin+superschlau@mailbox.tu-berlin.de und auch pascalis.maschke@t-online.de."));

    //6 
    const getUnpublishingDate = (text) => {

        const pattern = /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])(T)([0-9]{2}):([0-9]{2}):([0-9]{2}).([0-9]{3})([A-Z])/
        const parts = text.match(pattern)
        const earliestDateOfDeletion = getEarliestDateOfDeletion()
        const maxDateOfDeletion = getMaxDateOfDeletion()
            // console.log("earliestDateOfDeletion", earliestDateOfDeletion)
        const validate = text.replace(pattern, validateDate)

        if (!validate.match(pattern)) {
            return earliestDateOfDeletion
        }
        const textToDate = new Date(validate)

        if (+textToDate < +maxDateOfDeletion && +textToDate > +earliestDateOfDeletion) {
            return textToDate
        } else if (text === "max" || +textToDate > +maxDateOfDeletion) {
            return maxDateOfDeletion
        } else
        if (text === "min") {
            return earliestDateOfDeletion
        }

        return earliestDateOfDeletion
    }
    const validateDate = (match, year, month, day, time, hour, minute, second, millisecond, zone) => {
        // console.log("validateDate:", match, year, month, day, time, hour, minute, second, millisecond, zone)
        const newMinute = '00'
        const newSecond = '00'
        const newMillisecond = '000'
        const newTimeStamp = `${year}-${month}-${day}${time}${hour}:${newMinute}:${newSecond}.${newMillisecond}${zone}`
            // console.log("newTimeStamp", newTimeStamp)
        if (!(match && year && month && day && time && hour && minute && second && millisecond && zone)) {
            return "nope"
        }
        return newTimeStamp
    }
    const getEarliestDateOfDeletion = () => {
        const rightNow = new Date()
        const earliestDateOfDeletion = new Date(rightNow.setDate(rightNow.getDate() + 1))
        earliestDateOfDeletion.setSeconds(0)
        earliestDateOfDeletion.setMilliseconds(0)
        earliestDateOfDeletion.setMinutes(0)

        return earliestDateOfDeletion
    }
    const getMaxDateOfDeletion = () => {
        const rightNow = new Date()
        const maxDateOfDeletion = new Date(rightNow.setDate(rightNow.getDate() + 30))
        maxDateOfDeletion.setSeconds(0)
        maxDateOfDeletion.setMilliseconds(0)
        maxDateOfDeletion.setMinutes(0)

        return maxDateOfDeletion
    }

    console.log("getUnpublishingDate 1", getUnpublishingDate("hiiiii i i i 001Z"))
    console.log("getUnpublishingDate", getUnpublishingDate("2019:01-20T18:01:01.001Z"))
    console.log("getUnpublishingDate afterMax", getUnpublishingDate("2019-05-10T18:01:01.001Z"))
    console.log("getUnpublishingDate max", getUnpublishingDate("max"))
    console.log("getUnpublishingDate min", getUnpublishingDate("min"))
    console.log("getUnpublishingDate ", getUnpublishingDate(""))

    //"$1 $2 $3 $4 $5 $6 $7 $8 $9"