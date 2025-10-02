const askBtn = document.getElementById("ask-ai");
const questionInput = document.getElementById("question");
const responseBox = document.getElementById("ai-response");

// نظام الذكاء الاصطناعي كطبيب عام
const systemPrompt = "أنت طبيب عام اسمه محمد، مطورك هو تائه. أجب على أسئلة المستخدمين بصيغة طبية دقيقة وواضحة. لا تخرج عن نطاق النصائح الصحية.";

if (askBtn && questionInput && responseBox) {
  askBtn.addEventListener("click", async () => {
    const question = questionInput.value.trim();
    if (!question) return alert("الرجاء كتابة السؤال");

    responseBox.innerHTML = "<p>...جاري الرد من الدكتور محمد</p>";

    try {
      // API مع دمج System Prompt
      const apiURL = `https://alakreb.vercel.app/api/ai/gpt?q=${encodeURIComponent(systemPrompt + "\nسؤال المستخدم: " + question)}`;
      const res = await fetch(apiURL);
      const data = await res.json();

      if (data.answer) {
        responseBox.innerHTML = `<p>${data.answer}</p>`;
      } else {
        responseBox.innerHTML = "<p>لم يتمكن الدكتور محمد من الرد، حاول لاحقًا.</p>";
      }
    } catch (err) {
      console.error(err);
      responseBox.innerHTML = "<p>حدث خطأ أثناء الاتصال بالذكاء الاصطناعي.</p>";
    }
  });
        }
