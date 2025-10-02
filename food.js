const analyzeBtn = document.getElementById("analyze-food");
const foodInput = document.getElementById("food-name");
const responseBox = document.getElementById("food-response");

// نظام الذكاء الاصطناعي كطبيب تغذية
const systemPrompt = "أنت طبيب تغذية، مطورك هو تائه. أجب فقط عن الأسئلة المتعلقة بالأطعمة والمكونات الغذائية، بما في ذلك السعرات الحرارية، الدهون، البروتينات، الفيتامينات. لا ترد على أي أسئلة أخرى.";

if (analyzeBtn && foodInput && responseBox) {
  analyzeBtn.addEventListener("click", async () => {
    const foodName = foodInput.value.trim();
    if (!foodName) return alert("الرجاء كتابة اسم أكلة");

    responseBox.innerHTML = "<p>...جاري تحليل الغذاء بواسطة الدكتور التغذية</p>";

    try {
      const apiURL = `https://alakreb.vercel.app/api/ai/gpt?q=${encodeURIComponent(systemPrompt + "\nاسم الطعام: " + foodName)}`;
      const res = await fetch(apiURL);
      const data = await res.json();

      if (data.answer) {
        responseBox.innerHTML = `<p>${data.answer}</p>`;
      } else {
        responseBox.innerHTML = "<p>لم يتمكن الدكتور التغذية من تحليل هذا الطعام، حاول لاحقًا.</p>";
      }
    } catch (err) {
      console.error(err);
      responseBox.innerHTML = "<p>حدث خطأ أثناء الاتصال بالذكاء الاصطناعي.</p>";
    }
  });
      }
