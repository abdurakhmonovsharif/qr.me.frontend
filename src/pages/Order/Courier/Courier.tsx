import React from "react"

export const Courier = () => {
    return <React.Fragment>
        <h3>Выберите способ доставки</h3>
        <div className="section-container-left-checkboxes__make-order">
            <div className="section-container-left-checkboxes-block__make-order">
                <div className="radio">
                    <input className="custom-radio" type="radio" id="color-1" name="color" defaultValue="indigo" />
                    <label htmlFor="color-1">
                        <span className="section-container-left-checkboxes-block-text__make-order">
                            <span className="section-container-left-checkboxes-block-text-title__make-order">
                                Курьерская доставка
                            </span>
                            <span className="section-container-left-checkboxes-block-text-p__make-order">
                                СДЭК, Boxberry, Деловые Линии  — от 349 руб.
                            </span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="section-container-left-checkboxes-block__make-order">
                <div className="radio">
                    <input className="custom-radio" type="radio" id="color-2" name="color" defaultValue="indigo" />
                    <label htmlFor="color-2">
                        <span className="section-container-left-checkboxes-block-text__make-order">
                            <span className="section-container-left-checkboxes-block-text-title__make-order">
                                Самовывоз из магазина
                            </span>
                            <span className="section-container-left-checkboxes-block-text-p__make-order">
                                СДЭК, Boxberry, Деловые Линии  — от 349 руб.
                            </span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="section-container-left-checkboxes-block__make-order">
                <div className="radio">
                    <input className="custom-radio" type="radio" id="color-3" name="color" defaultValue="indigo" />
                    <label htmlFor="color-3">
                        <span className="section-container-left-checkboxes-block-text__make-order">
                            <span className="section-container-left-checkboxes-block-text-title__make-order">
                                Почта России
                            </span>
                            <span className="section-container-left-checkboxes-block-text-p__make-order">
                                СДЭК, Boxberry, Деловые Линии  — от 349 руб.
                            </span>
                        </span>
                    </label>
                </div>
            </div>
            <div className="section-container-left-checkboxes-block__make-order">
                <div className="radio">
                    <input className="custom-radio" type="radio" id="color-4" name="color" defaultValue="indigo" />
                    <label htmlFor="color-4">
                        <span className="section-container-left-checkboxes-block-text__make-order">
                            <span className="section-container-left-checkboxes-block-text-title__make-order">
                                Самовывоз из пункта выдачи
                            </span>
                            <span className="section-container-left-checkboxes-block-text-p__make-order">
                                СДЭК, Boxberry, Деловые Линии  — от 349 руб.
                            </span>
                        </span>
                    </label>
                </div>
            </div>
        </div>
    </React.Fragment>
}