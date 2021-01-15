export const SEND_CHAT = 'SEND_CHAT';
export const sendChat = (chatId, name, idMessage) => ({
    type: SEND_CHAT,
    chatId,
    name,
    idMessage
});