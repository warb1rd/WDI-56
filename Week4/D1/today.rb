today = {
    day_of_week: "Monday",
    date: {
        month: "February",
        day: 21,
        year: 2018
    },
    temperature_low: 47,
    temperature_high: 61,
    notable_birthdays: ["Abraham Lincoln", "Charles Darwin", "Arsenio Hall", "Judy Blume"],
    national_holiday: false
}

puts today

puts "-" *10

today[:weather] = "partly cloudy"

puts today
