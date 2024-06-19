import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Doctor {
    id: number;
    first_name: string;
    last_name: string;
    hospital: string;
    rate: string;
    review: string;
    specialization: string;
    about: string;
    image: string;
}

interface FavoriteDoctorsContextProps {
    favoriteDoctors: Doctor[];
    addFavoriteDoctor: (doctor: Doctor) => void;
    removeFavoriteDoctor: (doctorId: number) => void;
}

const FavoriteDoctorsContext = createContext<FavoriteDoctorsContextProps | undefined>(undefined);

export const FavoriteDoctorsProvider = ({ children }: { children: ReactNode }) => {
    const [favoriteDoctors, setFavoriteDoctors] = useState<Doctor[]>([]);

    const addFavoriteDoctor = (doctor: Doctor) => {
        setFavoriteDoctors((prevFavorites) => [...prevFavorites, doctor]);
    };

    const removeFavoriteDoctor = (doctorId: number) => {
        setFavoriteDoctors((prevFavorites) =>
            prevFavorites.filter((doctor) => doctor.id !== doctorId)
        );
    };

    return (
        <FavoriteDoctorsContext.Provider
            value={{ favoriteDoctors, addFavoriteDoctor, removeFavoriteDoctor }}
        >
            {children}
        </FavoriteDoctorsContext.Provider>
    );
};

export const useFavoriteDoctors = () => {
    const context = useContext(FavoriteDoctorsContext);
    if (!context) {
        throw new Error('useFavoriteDoctors must be used within a FavoriteDoctorsProvider');
    }
    return context;
};
