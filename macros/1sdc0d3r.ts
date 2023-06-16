export function prepare(newMacro) {

    const macroExtensions = {
    //* MYSQL LAYER 6
        //* Basic Commands: SELECT, FROM, WHERE, GROUP BY, HAVING, and ORDER BY
        "dbsel": newMacro()
    .typeAlphanumeric("select") // Supports a-z and 0-9
    .sendRawCmd("SS_DELAY(50)") // Raw commands in the C file
    .tapKey("X_SPACE") // Tap a raw key code
    .delay(50)
         "dbfrm": newMacro()
    .typeAlphanumeric("from")
    .sendRawCmd("SS_DELAY(50)"
    .tapKey("X_SPACE")
    .delay(50)
         "dbwhr": newMacro()
    .typeAlphanumeric("where")
    .sendRawCmd("SS_DELAY(50)")
    .tapKey("X_SPACE")
    .delay(50)
        "dbgrp": newMacro()
    .typeAlphanumeric("group")
    .sendRawCmd("SS_DELAY(50)")
    .tapKey("X_SPACE")
    .typeAlphanumeric("by")
    .sendRawCmd("SS_DELAY(50)")
    .tapKey("X_SPACE")
    .delay(50)
         "dbhav": newMacro()
    .typeAlphanumeric("having")
    .sendRawCmd("SS_DELAY(50)")
    .tapKey("X_SPACE")
    .delay(50)
         "dbord": newMacro()
    .typeAlphanumeric("order")
    .sendRawCmd("SS_DELAY(50)")
    .tapKey("X_SPACE")
    .typeAlphanumeric("by")
    .sendRawCmd("SS_DELAY(50)")
    .tapKey("X_SPACE")
    .delay(50)

        //* JOINS: Inner, Left, Right, Cross
        "dbijn": newMacro()
    .typeAlphanumeric("inner")
    .sendRawCmd("SS_DELAY(50)")
    .tapKey("X_SPACE")
    .typeAlphanumeric("join")
    .sendRawCmd("SS_DELAY(50)")
    .tapKey("X_SPACE")
    .delay(50) 
        "dbljn": newMacro()
    .typeAlphanumeric("left")
    .sendRawCmd("SS_DELAY(50)")
    .tapKey("X_SPACE")
    .typeAlphanumeric("join")
    .sendRawCmd("SS_DELAY(50)")
    .tapKey("X_SPACE")
    .delay(50)
        "dbrjn": newMacro()
    .typeAlphanumeric("right")
    .sendRawCmd("SS_DELAY(50)")
    .tapKey("X_SPACE")
    .typeAlphanumeric("join")
    .sendRawCmd("SS_DELAY(50)")
    .tapKey("X_SPACE")
    .delay(50)
         "dbcjn": newMacro()
    .typeAlphanumeric("left")
    .sendRawCmd("SS_DELAY(50)")
    .tapKey("X_SPACE")
    .typeAlphanumeric("join")
    .sendRawCmd("SS_DELAY(50)")
    .tapKey("X_SPACE")
    .delay(50)
    };

    return { macroExtensions };
}
