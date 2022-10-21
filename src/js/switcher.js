const btnMonthly = $("#btn-monthly")
const btnYearly = $("#btn-yearly")
const monthlyTariff = $("#pack-monthly")
const yearlyTariff = $("#pack-yearly")

btnYearly.on("click",function(){
    monthlyTariff.hide()
    yearlyTariff.show()
    btnYearly.removeClass('switch__btn-off')
    btnMonthly.addClass('switch__btn-off')
})
btnMonthly.on("click",function(){
    yearlyTariff.hide()
    monthlyTariff.show()
    btnMonthly.removeClass('switch__btn-off')
    btnYearly.addClass('switch__btn-off')
})