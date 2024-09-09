from telegram import InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Updater, CommandHandler, CallbackQueryHandler

def start(update, context):
    keyboard = [[InlineKeyboardButton("Open Web App", url='https://6745-188-146-115-37.ngrok-free.app/vite-boilerplate/')]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    update.message.reply_text('Please visit our web app:', reply_markup=reply_markup)

def button(update, context):
    query = update.callback_query
    query.answer()

def main():
    updater = Updater("6567539125:AAGN2TuwmJzIukk2PqNkSiovdjrecfL21-k", use_context=True)
    dp = updater.dispatcher
    dp.add_handler(CommandHandler('start', start))
    dp.add_handler(CallbackQueryHandler(button))
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()
