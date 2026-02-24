1. What is the difference between getElementById, 
getElementsByClassName, and querySelector / querySelectorAll?

উত্তর:
 getElementById হলো: একটি একক Element 
 অর্থাৎ নির্দিষ্ট আইডির মাধ্যমে একটি এলিমেন্ট কে খুঁজে বের করা আর 
 একটি পেজে আইডি শুধুমাত্র একটি হয় যা ইউনিক সুতরাং ইউনিক আইডির 
 মাধ্যমে একটি এলিমেন্ট কে খুঁজে বের করা।

 getElementsByClassName হলো: একটি class নাম দিয়ে ওই class নাম এর 
 সব element কে বের করা। অর্থাৎ একটি ক্লাস নাম দিয়ে অনেক ইলিমেন্টকে ধরা। 
 আর যা সরাসরি Html collection দেই।

 querySelector হলো: css এর মত কাজ করে এটা দিয়ে প্রথম Element পাওয়া যায়।
 অর্থাৎ querySelector চালালে সে প্রথম যার সাথে matching হয় তাকেই দিয়ে দেয়। 

 querySelectorAll হলো: css selector এর এবং ক্লাসের মত অনেক Element কে 
 ধরা যায় আর যার উপরে for চালানো যায় । আর NodeList দেয় যত Element এর সাথে ম্যাচ হয়। 



2. How do you create and insert a new element into the DOM?
 উত্তর:
 DOM এ  আমরা একটি new element তৈরী করার জন্য ৩টি কাজ করি।
    1. createElement(); করি example: [h1 or p or div or section etc]
    const h1 = document.createElement('h1') 
    2. h1.innerText = 'This is a heading'; or h1.innerHTML করি।
    3. append করে দেই  যা আমরা  output দেখতে পাই।

3. What is Event Bubbling? And how does it work?
 উত্তর: 
 Event Bubbling এর কাজ হলো উপরে ওঠা যেমন: পানির নিচ 
 থেকে বুদ বুদ ওঠার মত। অর্থাৎ আমি div এর মাঝে একটি span or 
 button Event করলাম মানে click করলাম তখন এটা span or 
 button এর মাঝে তো click হয়ই এবং সেটা তার parent div এর কাছেও যায় 
 এবং এরপর তার parent এরপর তার parent এভাবে body তে যা মোট কথা 
 ওপরে যেতে থাকে Bubbling হয়ে। 

4. What is Event Delegation in JavaScript? Why is it useful?
 উত্তর:
 Event Delegation এটা হলো Bubbling এর বড় ভাই। এটা দিয়ে আমরা আমাদের 
 কাজকে সহজ করতে পারি। যেমন 1000 বা ১০০টি বাটন এর কাজ ১০০বাটন না লিখে 
 Event Delegation দিয়ে করতে পারি।  যা মেমোরি ও সময় এবং ডায়নামিক ভাবে আমাদের কাজে আসে।

5. What is the difference between preventDefault() and stopPropagation() methods?
 উত্তর: 
 preventDefault() এটার কাজ হলো:
 আমরা ব্রাউজারের ডিফল্ট কাজ বন্ধ করতে পারি । যেমন: <a> tag এ ক্লিক করলে 
 সে কোথায় যায় বা ব্রাউজার রিলোড হয় এটা preventDefault() এর মাধ্যমে বন্ধ করা যায়।

 stopPropagation() দিয়ে  Event Bubbling ভাইয়ের বুদ বুদ ওঠা বা parent যাওয়ার 
 কাজটি বন্ধ করতে পারি। 