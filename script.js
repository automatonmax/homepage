const element = document.getElementById("dynamic-text");
const textArray = ["מקסימום אוטומציה", "אוטומציה עסקית"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

alert('ddd')
function type() {
    const currentText = textArray[textIndex];
    if (isDeleting) {
        // מחיקת האותיות האחרונות בטקסט
        element.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
        }
    } else {
        // הוספת אותיות לטקסט
        element.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
        if (charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 800; // השהייה קצרה לפני מחיקה
        }
    }
    setTimeout(type, typingSpeed);
}

// התחלת האנימציה
type();