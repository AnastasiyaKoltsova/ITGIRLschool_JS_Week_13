function formatDate(date) {
    const elapsedTime = new Date() - date;
    if (elapsedTime < 1000) {
        return 'прямо сейчас';
    } else if (elapsedTime < 60000) {
        return `${Math.floor(elapsedTime / 1000)} сек. назад`;
    } else if (elapsedTime < 3600000) {
        return `${Math.floor(elapsedTime / 60000)} мин. назад`;
    } else {
        const year = date.getFullYear().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
}