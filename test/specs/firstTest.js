describe('Homework', () => {
    before(async () => {
        await browser.url("https://www.rahulshettyacademy.com/AutomationPractice/");
        await browser.maximizeWindow();
    });

    it('Verify URL', async () => {
        console.log("Session Id is",browser.sessionId);
        await expect(browser).toHaveUrlContaining('rahulshettyacademy')
    });
    it('Check checkbox functionality', async () => {
        const checkboxes = await $('//*[@id="checkBoxOption1"]');
        await checkboxes.click();
        await expect(checkboxes).toBeSelected();
        
    });
    it ('Check Radio Button Functionality', async () => {
        const radiobuttons = await $('//*[@id="radio-btn-example"]/fieldset/label[2]/input');
        await radiobuttons.click();
        await expect(radiobuttons).toBeSelected(); 
        
    });
    it('Check Autosuggestions', async () => {
        const autosugg = await $("input[placeholder='Type to Select Countries']");
        await autosugg.setValue("Can")
        await browser.pause(2000)
        const allValues = await $$("//ul[@id='ui-id-1']//li//div[@class='ui-menu-item-wrapper']")
        for (let i=0;i<allValues.length;i++)
        console.log ("Values from Autos", await allValues[i].getText());
        const value = await allValues[i].getText()
        if (value.includes("Canada")) {
            await allValues[i].click()
        }

     });
     it('Check Dropdown', async () => {
        const dropo = await $$("#dropdown-class-example option");
        const dropDownMenu = await $("#dropdown-class-example");
        await dropDownMenu.click();
        await dropDownMenu.selectByIndex(2);
        
     });
     it('Check switch window',async () => {
        
        await(await $("#openwindow")).click()
        await browser.switchWindow("http://www.qaclickacademy.com/")
        await expect(browser).toHaveTitleContaining("QA Click Academy");
        await browser.closeWindow();
        await browser.switchWindow("Practice Page");

     });

     it('check tab example', async() => {
        await(await $("#opentab")).click()
        await browser.switchWindow('https://www.rahulshettyacademy.com/')
        await expect(browser).toHaveTitleContaining("Practice Page");
        
     });
     it('mousehover',async () => {
        await $('#mousehover').click()
        await $('#mousehover').scrollIntoView()
        await browser.pause(5000)
        await browser.reload()


        
     });

});
    


