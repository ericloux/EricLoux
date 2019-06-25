export default `
<head>
        <link rel = "stylesheet" type = "text/css" href = "../css/style.css" />

        <script src="https://kit.fontawesome.com/1832578556.js"></script>
</head>

<body>
    <header>
        CONTACT
    </header>

    <div class="contentWrapper">
        <nav class="contentMargin navBox" id="nav">
            <p class="navTitle">NAVIGATION</p>
            <ul>
                <li class="navItem"><a href="../index.html"><i class="fas fa-home"></i>HOME</a></li>
                <li class="navItem"><a href="/projects/index.html"><i class="fas fa-laptop-code"></i>PROJECTS</a></li>
                <li class="navItem"><a href="/blog/index.html"><i class="fas fa-book"></i>BLOG</a></li>
            </ul>
        </nav>
        
        <div>
            <h1 class="contactItem">Reach out!</h1>
            <form action="form-responses/new" method="POST" class="contactItem">
                <div>
                    <input class="contactItem" type="text" placeholder="First Name" name="firstname"/>
                    <br>
                    <input class="contactItem" type="text" placeholder="Last Name" name="lastname"/>
                    <br>
                    <input class="contactItem" type="email" placeholder="example@domain.com"/>
                    <br>
                </div>
                <div>
                    <input class="contactItem" type="radio" name="subject" value="personal" id="personal"/>
                    <label class="contactItem" for="personal">Personal message</label>
                    <br>
                    <input class="contactItem" type="radio" name="subject" value="personal" id="business"/>
                    <label class="contactItem" for="business">Business message</label>
                </div>
                <input class="contactItem" type="checkbox" name="optin" value="trusting" checked />Subscribe me to your newsletter! 
                <br class="contactItem">
                <label class="contactItem" for="marketing">How did you hear about me?</label>
                <select name="marketing">
                <optgroup label="Online">
                    <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
                    <option value="github">Online Portfolio (GitHub)</option>
                    <option value="search">Search Engine</option>
                    <option value="email">Email</option>
                </optgroup>
                <optgroup label="In-Person">
                    <option value="networking">We met at a networking event</option>
                    <option value="referral">Personal referral</option>
                    <option value="random">We met somewhere else</option>
                </optgroup>
                <option value="other">Other</option>
                </select>
        
                <div class="contactItem">
                    <textarea name="user_message" rows="8" cols="40" maxlength="500"></textarea>
                </div>
                <input type="submit" />
            </form>    
        </div>

        <div class="contentMargin"></div>
    </div>
</body>`