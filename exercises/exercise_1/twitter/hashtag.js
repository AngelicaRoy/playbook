const hash={
    hashtag:[
        {
            palabra_clave:"navidad",
            num_tweets:342
        },
        {
            palabra_clave:"anionuevo",
            num_tweets:734
        },
    ],
    getHashtagInfo:function(){
        return this.hashtag[0].palabra_clave+" tiene "+this.hashtag[0].num_tweets+" tweets";
    }

}
console.log(hash.getHashtagInfo());
