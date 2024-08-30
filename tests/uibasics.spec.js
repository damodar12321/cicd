const {test, expect} = require('@playwright/test')

test("First playwright test with Browser context",async ({browser})=>
{
 //chrome - plugins /cookies
 const context = await browser.newContext();
 const page = await context.newPage();
 await page.goto("https://www.slb.com")

}
);

test("First playwright test with out browser context",async ({page})=>
    {
     //chrome - plugins /cookies
         await page.goto("https://www.slb.com")         
         await expect(page).toHaveTitle("SLB, a global technology company | SLB");    
    }
    );


test("Rahul Shetty First Page",async ({page})=>
        {
         //chrome - plugins /cookies
             await page.goto("https://rahulshettyacademy.com/loginpagePractise/");                  
             await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");    
             await page.locator("#username").fill("rahulshettyaca");
             await page.locator("#password").fill("learning");
             await page.locator("#signInBtn").click();             
             await expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.");
        }
    );

    test("Rahul Shetty First Page 0",async ({page})=>
        {
         //chrome - plugins /cookies
             const  username = page.locator("#username");
             const  password = page.locator("#password");
             const  signin = page.locator("#signInBtn");
             const  userType = page.locator("select.form-control");
             const url ="https://rahulshettyacademy.com/loginpagePractise/";
             const cardTitles = page.locator(".card-body a");
             

             await page.goto(url);                  
             await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");    
             await username.fill("rahulshettyacadem");
             await password.fill("learning");
             await userType.selectOption("Teacher");
             await signin.click();             
             await expect(page.locator("[style*='block']")).toContainText("Incorrect username/password.");
             await username.fill("");
             await username.fill("rahulshettyacademy");
             await userType.selectOption("Teacher");
             await page.pause();
             await signin.click();
             console.log(await expect(cardTitles.first()).toContainText("iphone X"));
             console.log(await cardTitles.nth(1).textContent());
             console.log(await cardTitles.allTextContents());
        }
    )
        
    test("Damodar next pro is Playwright testing",async ({page})=>
        {
         //chrome - plugins /cookies
             const  username = page.locator("#userEmail");
             const  password = page.locator("#userPassword");
             const  signin = page.locator("#login");
             const cardTitles = page.locator("div.card-body b");

             await page.goto("https://rahulshettyacademy.com/client");                  
             console.log(await page.title);
             await username.fill("damodar.h@gmail.com");
             await password.fill("damodar");
             await signin.click();   
             await cardTitles.last().waitFor();
             console.log(await cardTitles.allTextContents());
             await page.waitForLoadState('networkidle');                     
                   
             console.log(await expect(cardTitles.first()).toContainText("ZARA COAT 3"));
             console.log(await cardTitles.allTextContents());

        }
    );

    
    test("Damodar Child Window",async ({browser})=>
        {
           
             const context = await browser.newContext();
             const page = await context.newPage();
             const  username = page.locator("#username");
             const  password = page.locator("#password");
             const  signin = page.locator("#signInBtn");
             const  userType = page.locator("select.form-control");
             const url ="https://rahulshettyacademy.com/loginpagePractise/";
             const cardTitles = page.locator(".card-body a");
             const documentsLink = page.locator("a[href*='documents-request']")
             
             await page.goto(url);    
            //*********Important */
             await expect(documentsLink).toHaveAttribute("class","blinkingText");
             const [newPage] =await Promise.all([
             context.waitForEvent('page'),
             documentsLink.click(),]);
             
             let text ="N/A";
             text = await  newPage.locator(".red").textContent();
             console.log(text);
             newPage.close();                        

        }
    )

    test.only('@Web Client App login', async ({ page }) => {
        //js file- Login js, DashboardPage
        const email = "damodar.h@gmail.com";
        const productName = 'ZARA COAT 3';
        const products = page.locator(".card-body");
        await page.goto("https://rahulshettyacademy.com/client");
        await page.locator("#userEmail").fill(email);
        await page.locator("#userPassword").fill("damodar");
        await page.locator("[value='Login']").click();
        await page.waitForLoadState('networkidle');
        await page.locator(".card-body b").first().waitFor();
        const titles = await page.locator(".card-body b").allTextContents();
        console.log(titles); 
        const count = await products.count();
        for (let i = 0; i < count; ++i) {
           if (await products.nth(i).locator("b").textContent() === productName) {
              //add to cart
              await products.nth(i).locator("text= Add To Cart").click();
              break;
           }
        }
      
        await page.locator("[routerlink*='cart']").click();
        //await page.pause();
      
        await page.locator("div li").first().waitFor();
        const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
        expect(bool).toBeTruthy();
        await page.locator("text=Checkout").click();
      
        await page.locator("[placeholder*='Country']").type("ind");
      
        const dropdown = page.locator(".ta-results");
        await dropdown.waitFor();
        const optionsCount = await dropdown.locator("button").count();
        for (let i = 0; i < optionsCount; ++i) {
           const text = await dropdown.locator("button").nth(i).textContent();
           if (text === " India") {
              await dropdown.locator("button").nth(i).click();
              break;
           }
        }
      
        expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
        await page.locator(".action__submit").click();
        await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
        const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
        console.log(orderId);
      
        await page.locator("button[routerlink*='myorders']").click();
        await page.locator("tbody").waitFor();
        const rows = await page.locator("tbody tr");
      
      
        for (let i = 0; i < await rows.count(); ++i) {
           const rowOrderId = await rows.nth(i).locator("th").textContent();
           if (orderId.includes(rowOrderId)) {
              await rows.nth(i).locator("button").first().click();
              break;
           }
        }
        const orderIdDetails = await page.locator(".col-text").textContent();
        expect(orderId.includes(orderIdDetails)).toBeTruthy();
      
     });
        