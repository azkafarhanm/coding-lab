# Fahrenheit to Kelvin
fahrenheit = float(input("Enter temperature in Fahrenheit: "))
kelvin = (5/9) * (fahrenheit - 32) + 273.15
print("Temperature in Kelvin is:", kelvin, "K")

# Kelvin to Fahrenheit
kelvin = float(input("Enter temperature in Kelvin: "))
fahrenheit = (9/5) * (kelvin - 273.15) + 32
print("Temperature in Fahrenheit is:", fahrenheit, "°F")
