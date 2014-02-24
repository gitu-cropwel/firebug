function runTest()
{
    FBTest.sysout("issue3688.START");
    FBTest.openNewTab(basePath + "css/3688/issue3688.html", function(win)
    {
        FBTest.openFirebug(function() {
            var panel = FBTest.selectPanel("stylesheet");
            var warning = panel.panelNode.getElementsByClassName("warning")[0];
            FBTest.ok(warning, "There must be a warning: There are no rules ...");

            FBTest.reload(function(win)
            {
                var panel = FBTest.selectPanel("stylesheet");
                var warning = panel.panelNode.getElementsByClassName("warning")[0];
                FBTest.ok(warning, "The text must be still there...");

                FBTest.testDone("issue3688.DONE");
            });
        });
    });
}
