export const type = {
    Scripted: 'Scripted',
    Animation: 'Animation',
    Reality : 'Reality',
    Talk_Show : 'Talk Show',
    Documentary : 'Documentary',
    Game_Show : 'Game Show',
    News: 'News',
    Sports : 'Sports',
    Variety : 'Variety',
    Award_Show : 'Award Show',
    Panel_Show: 'Panel Show',
    equals: (type)=>{
        switch (type) {
            case 'Scripted':
                return 'Scripted';
            case 'Animation':
                return 'Animation';
            case 'Reality':
                return 'Reality';
            case 'Talk Show':
                return 'TalkShow';
            case 'Documentary':
                return 'Documentary';
            case 'Game Show':
                return 'GameShow';
            case 'News':
                return 'News';
            case 'Sports':
                return 'Sports';
            case 'Variety':
                return 'Variety';
            case 'Award Show':
                return 'AwardShow';
            case 'Panel Show':
                return 'PanelShow';

            default:
                
                break;
        }
    }
} 
